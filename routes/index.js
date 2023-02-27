var express = require('express');
var router = express.Router();
const users = require('./v1/users/router')
const patients = require("./v1/patients/router");
const vets = require("./v1/vets/router");
const appointment = require("./v1/appointment/router");
const { login, register, protect, finishRegister } = require('./v1/auth');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/api/v1/register/", register);
router.post("/api/v1/register/:id_usuario", finishRegister);
router.post('/api/v1/login/', login)
router.use('/api/v1/clinica/', protect, users, patients, vets, appointment)

module.exports = router;
