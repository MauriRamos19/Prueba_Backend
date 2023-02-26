const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Patient = require("../../patients/model/patient");
const Vet = require("../../vets/model/vet");



const User = sequelize.define(
  "usuarios",
  {
    email: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "usuarios",
  }
);

User.hasOne(Patient)
User.hasOne(Vet);


module.exports = User;