const { request, response } = require("express");
const { Vet } = require("../model/vet");

const getVets = async (req = request, res = response) => {
  const vets = await Vet.findAll();

  return res.status(200).send({vets});
};

module.exports = { getVets };
