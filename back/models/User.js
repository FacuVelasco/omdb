const Sequelize = require("sequelize");
const crypto = require("crypto");

const db = require("../config/db");

class User extends Sequelize.Model {}
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

User.generateSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

User.hashPassword = function(password, salt) {
  return crypto
    .createHmac("sha1", salt)
    .update(password)
    .digest("hex");
};

User.prototype.validPassword = function(password) {
  return this.password === User.hashPassword(password, this.salt);
};

module.exports = User;
