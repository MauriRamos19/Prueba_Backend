const { request, response } = require('express')
const Appointment = require('../model/appointment')



const getAppointment = async(req = request, res = response) => {

    const appointment = await Appointment.findAll()

    return res.status(200).send({appointment});
} 

const patchAppointment = async (req = request, res = response) => {
  const { id_cita } = req.params;

  const appointment = await Patient.findByPk(id_cita, {
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

module.exports = { getAppointment, patchAppointment };