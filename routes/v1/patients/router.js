const express = require("express");
const router = express.Router();
const { getPatients, patchPatient, deletePatient } = require("./controller/patients");

router.get("/pacientes", getPatients);
router.patch("/pacientes/:id_paciente", patchPatient);
router.delete("/pacientes/:id_paciente", deletePatient);

module.exports = router;
