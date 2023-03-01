const { request, response } = require('express');
const sequelize = require('../../../../server/Database/sequelizeConnection');
const Patient = require('../../patients/model/patient');
const Appointment = require('../model/appointment')



const getAppointment = async(req = request, res = response) => {

    const appointment = await sequelize.query('SELECT `citas`.`id_cita`, `paciente`.`nombre_dueño` AS `nombre_dueño`, `veterinario`.`direccion_clinica` AS `direccion_veterinario`, `citas`.`fecha` FROM `citas` AS `citas` INNER JOIN `pacientes` AS `paciente` ON `citas`.`id_paciente` = `paciente`.`id_paciente` INNER JOIN `veterinarios` AS `veterinario` ON `citas`.`id_veterinario` = `veterinario`.`id_veterinario`;')

  
    return res.status(200).send({appointment: appointment[0]});
} 

const patchAppointment = async (req = request, res = response) => {
  const { id_cita } = req.params;

  const appointment = await Appointment.findByPk(id_cita, {
    attributes: ["id_cita"],
  });

  if (!appointment)
    return res.status(404).send({ ok: false, msg: "No hay cita registrada" });

  await Appointment.update(req.body, {
    where: {
      id_cita: id_cita,
    },
  });

  return res.status(200).send({ ok: true, msg: "Cita actualizada" });
};

Appointment.belongsTo(Patient)

module.exports = { getAppointment, patchAppointment };