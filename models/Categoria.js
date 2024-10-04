import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";

const Categorias = conection.define("categorias", {
    //O SEQUELIZE CRIA A PRIMARY KEY AUTOMATICAMENTE COMO "id"
    categoria: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});

//NÃO FORÇA A CRIAÇÃO DA TABELA CASO ELA JÁ EXISTA
Categorias.sync({ force: false });
export default Categorias;
