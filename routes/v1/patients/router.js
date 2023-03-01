const express = require("express");
const router = express.Router();
const { getPatients, patchPatient, deletePatient, scheduleAppointment } = require("./controller/patients");

router.get("/pacientes", getPatients);
router.patch("/pacientes/:id_paciente", patchPatient);
router.delete("/pacientes/:id_paciente", deletePatient);

router.post("/pacientes/:id_paciente/veterinarios/:id_veterinario", scheduleAppointment);
router.patch("/pacientes/:id_cita", patchPatient);

module.exports = router;
