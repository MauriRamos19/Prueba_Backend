const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        define: {
            timestamps: false
        }
    },
);


async function test_connection() {
    try {
        await sequelize.authenticate();

        console.log("Sequelize Conectado Exitosamente!");
        console.log("Happy Hacking!");
    } catch (error) {
        console.error("No fue posible crear la conexion con Sequelize", error);
        sequelize.close();
    }
}

test_connection();

module.exports = sequelize;
