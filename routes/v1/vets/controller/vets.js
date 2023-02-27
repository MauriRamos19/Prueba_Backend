const { request, response } = require("express");
const { Vet, Animal } = require("../model/vet");
const { v4: uuid4 } = require('uuid')

const getVets = async (req = request, res = response) => {
  const vets = await Vet.findAll({
    attributes: ["id_veterinario", "direccion_clinica", "id_usuario"],
  });

  return res.status(200).send({vets});
};

const patchVet = async (req = request, res = response) => {
  const { id_veterinario } = req.params;

  const vet = await Vet.findByPk(id_veterinario, {
    attributes: ["id_veterinario"],
  });

  if (!vet)
    return res.status(404).send({ ok: false, msg: "Veterinario no encontrado" });

  await Vet.update(req.body, {
    where: {
      id_veterinario: id_veterinario,
    },
  });

  return res.status(200).send({ ok: true, msg: "Veterinario modificado" });
};

const deleteVet = async (req = request, res = response) => {
  const { id_veterinario } = req.params;

  const vet = await Vet.findByPk(id_veterinario, {
    attributes: ["id_veterinario"],
  });

  if (!vet)
    return res
      .status(404)
      .send({ ok: false, msg: "Veterinario no encontrado" });

  await Vet.destroy({
    where: {
      id_veterinario,
    },
  });

  return res.status(200).send({ ok: true, msg: "Veterinario eliminado" });
};


const getAnimals = async (req = request, res = response) => {
  const animals = await Animal.findAll({
    attributes: ['id_animal','nombre']
  });

  return res.status(200).send({ animals });
};

const postAnimal = async (req = request, res = response) => {
  await Animal.create({ id_animal: uuid4(), nombre: req.body.nombre});

  return res.status(200).send({ ok: true, msg: 'Animal agregado'});
};



module.exports = { getVets, patchVet, deleteVet, getAnimals, postAnimal };
