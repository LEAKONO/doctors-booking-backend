const Doctor = require("../models/Doctor");

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find().populate("user", "name email");
  res.json(doctors);
};

exports.addDoctor = async (req, res) => {
  const { user, specialty, availableSlots } = req.body;
  const doctor = new Doctor({ user, specialty, availableSlots });
  await doctor.save();
  res.status(201).json(doctor);
};
