const express = require("express");
const { getDoctors, addDoctor } = require("../controllers/doctorController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getDoctors);
router.post("/", authMiddleware, addDoctor);

module.exports = router;
