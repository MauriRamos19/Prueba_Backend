const express = require("express");
const router = express.Router();
const { getPatients } = require("./controller/patients");

router.get("/pacientes", getPatients);

module.exports = router;
