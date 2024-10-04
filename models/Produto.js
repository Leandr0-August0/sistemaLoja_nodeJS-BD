//IMPORTANDO O SEQUELIZE E A CONEXÃO
import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";
//POR CONTA DA ASSOCIAÇÃO É NESSESSÁRIO IMPORTAR CATEGORIAS
import Categorias from "./Categoria.js";

// .define CRIA A TABELA NOBANCO
const Produtos = conection.define("produtos", {
    //O SEQUELIZE CRIA A PRIMARY KEY AUTOMATICAMENTE COMO "id"
    produto: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    categoria: {
        type: Sequelize.INTEGER,
        // gera a foregn key referenciando à tabela criada no módulo 'Categorias'
        references: {
            model: Categorias,
            // referencia a foreign key na primary key 'id'
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
        type: Sequelize.DECIMAL(2, 1),
        defaultValue: null,
    },
});

//PARA ASSOCIAR AS TABELAS ENTRE SI É NECESSÁRIO CRIAR A CARDINALIDADE
//.belongsTo fala que o pedido é referente a um cliente
Produtos.belongsTo(Categorias, {
    foreignKey: "categoria",
    as: "categoriaId",
});

//.hasMany fala que cada cliente pode ter vários pedidos
Categorias.hasMany(Produtos, {
    foreignKey: "categoria",
});

//NÃO FORÇA A CRIAÇÃO DA TABELA CASO ELA JÁ EXISTA
Produtos.sync({ force: false });
export default Produtos;
