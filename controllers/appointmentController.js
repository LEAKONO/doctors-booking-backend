const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  const { doctor, date, time } = req.body;
  const patient = req.user.id;

  const appointment = new Appointment({ doctor, patient, date, time });
  await appointment.save();
  res.status(201).json(appointment);
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate("doctor patient", "name email");
  res.json(appointments);
};
