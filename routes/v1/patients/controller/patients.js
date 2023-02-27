const { request, response } = require("express");
const Patient = require("../model/patient");

const getPatients = async (req = request, res = response) => {
  const appointment = await Patient.findAll();

  return res.status(200).send({appointment});
};

module.exports = { getPatients };
