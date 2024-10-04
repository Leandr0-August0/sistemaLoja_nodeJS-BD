import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";

// .define CRIA A TABELA NOBANCO
const Clientes = conection.define("clientes", {
    //O SEQUELIZE CRIA A PRIMARY KEY AUTOMATICAMENTE COMO "id"
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tel: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
    },
});

//NÃO FORÇA A CRIAÇÃO DA TABELA CASO ELA JÁ EXISTA
Clientes.sync({ force: false });
export default Clientes;
 