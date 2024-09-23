const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "event_management",
  "root",
  "Hovo200808",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
