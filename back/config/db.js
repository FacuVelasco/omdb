const Sequelize = require("sequelize");

// so I can have env variables in tests/seeds connections
require("dotenv").config();

const { DB_NAME, PSQL_USER, PSQL_PASS } = process.env;

const db = new Sequelize(DB_NAME, PSQL_USER, PSQL_PASS, {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

module.exports = db;
