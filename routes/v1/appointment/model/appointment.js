const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Patient = require("../../patients/model/patient");


const Appointment = sequelize.define("citas", {
  id_cita: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  id_veterinario: {
    type: DataTypes.STRING,
    references: {
      model: "veterinarios",
      key: "id_veterinario",
    },
  },
  pacienteId: {
    type: DataTypes.STRING,
    references: {
      model: "pacientes",
      key: "id_paciente",
    },
  },
  fecha: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.ENUM("PENDIENTE", "COMPLETADA", "CANCELADA"),
    defaultValue: 'PENDIENTE'
  },
});

module.exports = Appointment;