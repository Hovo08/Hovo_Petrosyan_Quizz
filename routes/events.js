// // routes/event.js
// const express = require("express");
// const router = express.Router();
// const { createEvent, getEvents } = require("../controllers/eventsControllers"); // Ensure this path is correct
// const multer = require("multer");
// const { verifyToken } = require("../middlewares/authMiddleware");

// // Setup your multer storage as needed
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Define your routes
// router.post("/events", verifyToken, upload.single("image"), createEvent); // Ensure createEvent is defined and imported correctly
// router.get("/events", getEvents); // Ensure getEvents is defined and imported correctly

// module.exports = router;
