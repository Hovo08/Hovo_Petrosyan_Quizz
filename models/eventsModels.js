// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db.mysql.js");
// const User = require("./userModels.js"); // Импортируем модель пользователя

// const Event = sequelize.define(
//   "Event",
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     location: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING, // Сохраняем путь к изображению
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "Events",
//     timestamps: true, // Добавляем временные метки
//   }
// );

// // Связываем события с пользователями
// User.hasMany(Event);
// Event.belongsTo(User);

// module.exports = Event;
