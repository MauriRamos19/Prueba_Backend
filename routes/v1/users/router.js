const express = require("express");
const router = express.Router();
const { getUsers } = require("./controller/users")


router.get("/usuarios", getUsers);


module.exports = router;