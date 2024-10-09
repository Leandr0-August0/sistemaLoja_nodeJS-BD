import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";

const Administrador = conection.define("admins", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
});

Administrador.sync({ force: false });
export default Administrador;
