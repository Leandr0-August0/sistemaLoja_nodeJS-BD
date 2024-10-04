import sequelize from "sequelize";
import conection from "../config/sequelize-config.js";
//POR CONTA DA ASSOCIAÇÃO É NESSESSÁRIO IMPORTAR CLIENTES
import Clientes from "./Cliente.js";

// .define CRIA A TABELA NOBANCO
const Pedidos = conection.define("pedidos", {
    //O SEQUELIZE CRIA A PRIMARY KEY AUTOMATICAMENTE COMO "id"
    qtd: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    cliente: {
        type: sequelize.INTEGER,
        // gera a foregn key referenciando à tabela criada no módulo 'Clientes' 
        references: {
            model: Clientes,
            // referencia a foreign key na primary key 'id'
            key: "id",
        },
        allowNull: false,
    },
    total: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    datPedido: {
        type: sequelize.DATE,
        allowNull: false,
    },
    datEnvio: {
        type: sequelize.DATE,
    },
    datEntrega: {
        type: sequelize.DATE,
    },
});

//PARA ASSOCIAR AS TABELAS ENTRE SI É NECESSÁRIO CRIAR A CARDINALIDADE
//.belongsTo fala que o pedido é referente a um cliente
Pedidos.belongsTo(Clientes, {
    foreignKey: "cliente", // Nome da FK no modelo Pedidos
    as: "clienteId", // Alias da associação
});

//.hasMany fala que cada cliente pode ter vários pedidos
Clientes.hasMany(Pedidos, {
    foreignKey: "cliente", // Nome da FK no modelo Pedidos
});

//NÃO FORÇA A CRIAÇÃO DA TABELA CASO ELA JÁ EXISTA
Pedidos.sync({ force: false });
export default Pedidos;
