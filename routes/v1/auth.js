const User = require('./users/model/user');
const { v4: uuid4 } = require('uuid');
const { request } = require('express');
const Patient = require('./patients/model/patient');
const { Vet } = require('./vets/model/vet');
const { response } = require('../../app');




const register = async(req, res = response) => {

    const  { correo, telefono } = req.body;

    const existEmail = await User.findOne({
      where: {
        correo: correo,
      },
      attributes: ["id_usuario"],
    });

    if(existEmail) return res.status(404).send({ ok: false, msg: 'El usuario ya esta registrado'})

    const user = new User({ id_usuario: uuid4(), correo, telefono });
    await user.save()


    return res.status(200).send({ ok: true, user })
}


const finishRegister = async (req, res) => {

    const { id_usuario } = req.params

    if( req.body.tipo_usuario === 'patient' ) {

        if(!req.body.nombre_dueño && !req.body.tipo_animal) {
            return res.status(400).send({ok: false, msg: 'Los campos son obligatorios'})
        }

        const { nombre_dueño, tipo_animal } = req.body;
        

        const existPatient = await Patient.findOne({
          where: {
            id_usuario,
          },
          attributes: ["id_paciente"],
        });

        if(existPatient) return res.status(400).send({ ok: false, msg: 'El paciente ya esta registrado '})

        const patient = new Patient({ id_paciente: uuid4(), nombre_dueño, tipo_animal, id_usuario });
        await patient.save();

        return res.status(200).send({ ok: true, patient });

    } else if (req.body.tipo_usuario === "vet" ){
        if (!req.body.direccion_clinica) {
          return res
            .status(400)
            .send({ ok: false, msg: "Los campos son obligatorios" });
        }

        const { direccion_clinica } = req.body;

        const existVet = await Vet.findOne({
          where: {
            id_usuario: id_usuario,
          },
          attributes: ['id_veterinario']
        });

        if (existVet)
          return res
            .status(400)
            .send({ ok: false, msg: "El veterinario ya esta registrado " });

        const vet = new Vet({ id_veterinario: uuid4(), direccion_clinica, id_usuario});
        await vet.save();

        return res.status(200).send({ ok: true, vet });
    }

    
};



const login = async(req,res) => {
    
    const { correo } = req.body

    const userDB = await User.findOne({
      where: {
        correo: correo,
      },
      attributes: ['id_usuario', 'correo', 'telefono']
    });

    if (userDB === null)
      return res
        .status(404)
        .send({ ok: false, msg: "El usuario no esta registrado" });


    
    return res.status(200).send({email: userDB.correo})
}



const protect = async(req,res,next) => {

    if(!req.headers.authorization) {
        return res.status(403).send({msg: 'No autorizado'})
    }

    const credenciales = Buffer.from(req.get("Authorization").split(" ")[1], "base64").toString().split(':');
    

    if(credenciales[0] === ''){
        return res.status(403).send({ msg: "No autorizado" });
    }

    const user = await User.findOne({
        where: {
            correo: credenciales[0]
        },
        attributes: ['id_usuario', 'correo']
    });

    if(user === null) {
        return res.status(404).send({ msg: "No autenticado" }); 
    }

    req.user = user;
    next()
}

module.exports = { register, finishRegister, login, protect };