const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const { Vet } = require("../../vets/model/vet");
const Appointment = require("../../appointment/model/appointment");

const Patient = sequelize.define(
  "pacientes",
  {
    nombre_dueño: {
      type: DataTypes.STRING,
    },
    tipo_animal: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "pacientes",
  }
);

Patient.hasOne(Appointment);



module.exports = Patient;
