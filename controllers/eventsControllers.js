// const Event = require("../models/eventsModels.js");

// exports.createEvent = async (req, res) => {
//   const { title, description, date, location } = req.body;
//   const userId = req.user.id; // Получаем ID пользователя из токена

//   try {
//     const event = await Event.create({
//       title,
//       description,
//       date,
//       location,
//       image: req.file ? req.file.path : null, // Сохраняем путь к изображению
//       UserId: userId, // Связываем событие с пользователем
//     });
//     res.status(201).json({ message: "Событие успешно создано", event });
//   } catch (err) {
//     console.error("Ошибка при создании события: ", err);
//     res.status(500).json({ message: "Ошибка при создании события" });
//   }
// };

// exports.getEvents = async (req, res) => {
//   try {
//     const events = await Event.findAll();
//     res.status(200).json(events);
//   } catch (err) {
//     console.error("Ошибка при получении событий: ", err);
//     res.status(500).json({ message: "Ошибка при получении событий" });
//   }
// };
