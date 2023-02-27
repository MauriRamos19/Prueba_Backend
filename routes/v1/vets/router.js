const express = require("express");
const router = express.Router();
const { getVets, getAnimals, postAnimal, patchVet, deleteVet, postVetAnimal } = require("./controller/vets");

router.get("/veterinarios", getVets);
router.patch("/veterinarios/:id_veterinario", patchVet);
router.delete("/veterinarios/:id_veterinario", deleteVet);
router.get("/animales", getAnimals);
router.post("/animales", postAnimal);
router.post("/vet-animal", postVetAnimal);

module.exports = router;
