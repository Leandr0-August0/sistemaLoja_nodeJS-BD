//IMPORTANDO O SEQUELIZE E A CONEXÃO
import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import conection from "../config/sequelize-config.js";
import Categorias from "./Categoria.js";

//DEFININDO A TABELA
const Produtos = conection.define("produtos", {
    produto: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Categorias",
            key: "id",
        },
    },
    valor: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
    },
    imagem: {
        type: Sequelize.TEXT,
    },
    avaliacao: {
        type: Sequelize.ENUM(1, 2, 3, 4, 5, "Não avaliado"),
        defaultValue: "Não avaliado",
    },
});

Produtos.belongsTo(Categorias, {
    foreignKey: "categoria",
    as: "categoriaId",
});

//NÃO FORÇAR A CRIAÇÃO DA TABELA
Produtos.sync({ force: false });
export default Produtos;
