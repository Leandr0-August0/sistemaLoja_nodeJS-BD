import Sequelize from "sequelize";
import conection from "../config/sequelize-config";

const Administrador = conection.define("admins", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    login: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
});

Administrador.sync({ force: false });
export default Administrador;
