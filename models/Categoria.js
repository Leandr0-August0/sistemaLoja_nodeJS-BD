import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";

const Categorias = conection.define("categorias", {
    categoria: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});

Categorias.sync({ force: false });
export default Categorias;
