const { DataTypes } = require("sequelize");
const sequelize = require("../../../../server/Database/sequelizeConnection");


const Appointment = sequelize.define("citas", {
    fecha: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.ENUM('PENDIENTE', 'COMPLETADA', 'CANCELADA')
    }
});

module.exports = Appointment;