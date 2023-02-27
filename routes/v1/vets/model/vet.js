const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Appointment = require("../../appointment/model/appointment");
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

const Animal = sequelize.define(
  "animales",
  {
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "animales",
  }
);



const VetAnimal = sequelize.define(
  "veterinario_animal"
);




Vet.hasOne(VetAnimal);
Animal.hasOne(VetAnimal);
Vet.hasOne(Appointment);

module.exports = { Vet, VetAnimal };


