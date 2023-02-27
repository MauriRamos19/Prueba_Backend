const { request, response } = require("express");
const Patient = require("../model/patient");

const getPatients = async (req = request, res = response) => {
  const pacients = await Patient.findAll({
    attributes: ['id_paciente','nombre_dueño','tipo_animal','id_usuario']
  });

  return res.status(200).send({ pacients });
};

module.exports = { getPatients };
