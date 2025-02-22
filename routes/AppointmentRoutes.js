const express = require("express");
const { bookAppointment, getAppointments } = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, bookAppointment);
router.get("/", authMiddleware, getAppointments);

module.exports = router;
