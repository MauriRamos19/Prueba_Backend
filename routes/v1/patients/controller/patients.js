const { request, response } = require("express");
const Patient = require("../model/patient");

const getPatients = async (req = request, res = response) => {
  const pacients = await Patient.findAll({
    attributes: ['id_paciente','nombre_dueño','tipo_animal','id_usuario']
  });

  return res.status(200).send({ pacients });
};

const patchPatient = async (req = request, res = response) => {

    const { id_paciente } = req.params;

    const patient = await Patient.findByPk(id_paciente,{
        attributes: ['id_paciente']
    });

    if (!patient) return res.status(404).send({ok: false, msg: 'Paciente no encontrado'})

    await Patient.update(req.body, {
    where: {
        id_paciente: id_paciente,
    },
    });

  return res.status(200).send({ ok: true, msg: 'Paciente modificado'});
};

const deletePatient = async (req = request, res = response) => {
    const { id_paciente } = req.params;

    const patient = await Patient.findByPk(id_paciente,{
        attributes: ['id_paciente']
    });

    if (!patient)
      return res.status(404).send({ ok: false, msg: "Paciente no encontrado" });

    await Patient.destroy({
        where: {
            id_paciente
        }
    });

    return res.status(200).send({ ok: true, msg: "Paciente eliminado" });
};

module.exports = { getPatients, patchPatient, deletePatient };
