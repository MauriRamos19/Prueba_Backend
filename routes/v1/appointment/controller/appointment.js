const { request, response } = require('express')
const Appointment = require('../model/appointment')



const getAppointment = async(req = request, res = response) => {

    const appointment = await Appointment.findAll()

    return res.status(200).send({appointment});
} 


module.exports = { getAppointment }