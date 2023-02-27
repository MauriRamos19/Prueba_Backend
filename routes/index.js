var express = require('express');
var router = express.Router();
const users = require('./v1/users/router')
const patients = require("./v1/patients/router");
const vets = require("./v1/vets/router");
const appointment = require("./v1/appointment/router");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/api/v1/clinica/',users, patients, vets, appointment)

module.exports = router;
