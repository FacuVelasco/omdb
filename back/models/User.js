const Sequelize = require("sequelize");
const crypto = require("crypto");

const db = require("../config/db");

class User extends Sequelize.Model {
  static generateSalt() {
    return crypto.randomBytes(20).toString("hex");
  }

  static hashPassword(password, salt) {
    return crypto
      .createHmac("sha1", salt)
      .update(password)
      .digest("hex");
  }

  validPassword(password) {
    return this.password === User.hashPassword(password, this.salt);
  }
}

User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    password: {
      type: Sequelize.STRING,
      validate: { notEmpty: true }
    },
    salt: {
      type: Sequelize.STRING
    }
  },
  { sequelize: db, modelName: "users" }
);

User.addHook("beforeCreate", user => {
  user.salt = User.generateSalt();
  user.password = User.hashPassword(user.password, user.salt);
});

module.exports = User;
