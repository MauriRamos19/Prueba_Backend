const express = require("express");
const router = express.Router();
const { getAppointment } = require("./controller/appointment");

router.get("/citas", getAppointment);

module.exports = router;
