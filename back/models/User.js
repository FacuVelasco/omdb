const Sequelize = require("sequelize");

const db = require("../config/db");

class User extends Sequelize.Model {}
User.init(
  {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  },
  { db, modelName: "user" }
);

module.exports = User;
