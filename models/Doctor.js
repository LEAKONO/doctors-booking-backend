const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  specialty: { type: String, required: true },
  availableSlots: [{ date: String, time: String }],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
