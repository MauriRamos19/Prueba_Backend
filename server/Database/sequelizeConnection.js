const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mysql://root:YqU3BqoE8EW6mmxQsFg3@containers-us-west-194.railway.app:7140/railway"
);

async function test_connection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync()

        console.log("Sequelize Conectado Exitosamente!");
        console.log("Happy Hacking!");
    } catch (error) {
        console.error("No fue posible crear la conexion con Sequelize", error);
        sequelize.close();
    }
}

test_connection();

module.exports = sequelize;
