const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Appointment = require("../../appointment/model/appointment");
const User = require("../../users/model/user");

const Patient = sequelize.define("pacientes", {
  id_paciente: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nombre_dueño: {
    type: DataTypes.STRING,
  },
  tipo_animal: {
    type: DataTypes.STRING,
  },
  id_usuario: {
    type: DataTypes.STRING,
    references: {
        model: 'usuarios',
        key: 'id_usuario'
    }
  },
});

Patient.hasOne(Appointment);
Patient.sync()

module.exports = Patient;
