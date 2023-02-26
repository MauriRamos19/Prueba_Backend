const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Patient = require("../../patients/model/patient");

const Vet = sequelize.define(
  "veterinarios",
  {
    direccion_clinica: {
        type: DataTypes.STRING
    }
  },
  {
    tableName: "veterinarios",
  }
);

module.exports = Vet
