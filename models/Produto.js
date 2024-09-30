//IMPORTANDO O SEQUELIZE E A CONEXÃO
import Sequelize from "sequelize";
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
        references: {
            model: Categorias,
            key: "id",
        },
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
    },
    imagem: {
        type: Sequelize.TEXT,
    },
    avaliacao: {
        type: Sequelize.DECIMAL(2,1),
        defaultValue: null,
    },
});

Produtos.belongsTo(Categorias, {
    foreignKey: "categoria",
    as: "categoriaId",
});

//NÃO FORÇAR A CRIAÇÃO DA TABELA
Produtos.sync({ force: false });
export default Produtos;
