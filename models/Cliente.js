// ORM - Sequelize
import Sequelize from "sequelize";

// Configuração do Sequelize
import conection from "../config/sequelize-config.js";

// .define cria a tabela no banco
const Clientes = conection.define("clientes", {
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

// Não força a criação da tabela caso já exista
Clientes.sync({ force: false });
export default Clientes;
