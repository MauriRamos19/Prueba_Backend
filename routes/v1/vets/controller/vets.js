const { request, response } = require("express");
const { Vet, Animal } = require("../model/vet");

const getVets = async (req = request, res = response) => {
  const vets = await Vet.findAll({
    attributes: ["id_veterinario", "direccion_clinica", "id_usuario"],
  });

  return res.status(200).send({vets});
};


const getAnimals = async (req = request, res = response) => {
  const animals = await Animal.findAll({
    attributes: ['id_animal','nombre']
  });

  return res.status(200).send({ animals });
};


module.exports = { getVets, getAnimals };
