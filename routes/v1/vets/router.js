const express = require("express");
const router = express.Router();
const { getVets } = require("./controller/vets");

router.get("/veterinarios", getVets);

module.exports = router;
