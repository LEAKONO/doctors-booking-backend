const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: String,
  time: String,
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
