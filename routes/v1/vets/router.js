const express = require("express");
const router = express.Router();
const { getVets, getAnimals } = require("./controller/vets");

router.get("/veterinarios", getVets);
router.get("/animales", getAnimals);

module.exports = router;
