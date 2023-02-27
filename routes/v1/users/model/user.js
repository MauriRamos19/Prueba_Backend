const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Patient = require("../../patients/model/patient");
const { Vet } = require("../../vets/model/vet");



const User = sequelize.define(
  "usuarios",
  {
    id_usuario: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    telefono: {
      type: DataTypes.STRING
    }
  }
);

User.hasOne(Patient)
User.hasOne(Vet);

User.sync()

module.exports = User;