const express = require("express");
const router = express.Router();
const { getAppointment } = require("./controller/appointment");

router.get("/citas", getAppointment);
router.get("/citas/:id_cita", getAppointment);

module.exports = router;
