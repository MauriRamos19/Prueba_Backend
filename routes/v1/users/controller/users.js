const { request, response } = require("express");
var random = require("generate-random-data");
const User = require('../model/user')

async function listarUsuarios() {
    let users = [
        {
            nombre: "Ingenieria Digital",
            correo: "ID@ingenieria.digital",
            rtn: random.mobile(),
            pais: "Honduras",
            telefono: random.mobile(),
            ciudad: "Tegucigalpa",
        },
        {
            nombre: "Asegurame",
            correo: "asegurame@asegurame.com",
            rtn: random.mobile(),
            pais: "Honduras",
            telefono: random.mobile(),
            ciudad: "Tegucigalpa",
        }]

    return users
}


const getUsers = async(req = request, res = response) => {

    const users = await User.findAll({
        attributes: ['email']
    });

    return res.status(200).send({ users });

}

module.exports = { getUsers };