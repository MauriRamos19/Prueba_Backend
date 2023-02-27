const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");
const Appointment = require("../../appointment/model/appointment");
const Patient = require("../../patients/model/patient");

const Vet = sequelize.define(
  "veterinarios",
  {
    id_veterinario: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    direccion_clinica: {
      type: DataTypes.STRING,
    },
    id_usuario: {
      type: DataTypes.STRING,
      references: {
        model: "usuarios",
        key: "id_usuario",
      },
    },
  },
  {
    tableName: "veterinarios",
  }
);

const Animal = sequelize.define(
  "animales",
  {
    id_animal: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "animales",
  }
);



const VetAnimal = sequelize.define("veterinario_animal", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_veterinario: {
        type: DataTypes.STRING,
        references: {
        model: "veterinarios",
        key: "id_veterinario",
        },
    },
    id_animal: {
        type: DataTypes.STRING,
        references: {
        model: "animales",
        key: "id_animal",
        },
    },
});




Vet.hasOne(VetAnimal);
Animal.hasOne(VetAnimal);
Vet.hasOne(Appointment);

module.exports = { Vet, Animal, VetAnimal };


