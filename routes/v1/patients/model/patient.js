const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");

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


module.exports = Patient;
