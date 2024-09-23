const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.mysql.js");

const User = sequelize.define(
  "User",
  {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    timestamps: false,
  }
);

sequelize.sync(); 

module.exports = User;
