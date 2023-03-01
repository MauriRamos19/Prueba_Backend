const express = require("express");
const router = express.Router();
const { getAppointment, patchAppointment } = require("./controller/appointment");

router.get("/citas", getAppointment);
router.patch("/citas/:id_cita", patchAppointment);

module.exports = router;
