import sequelize from "sequelize";

import conection from "../config/sequelize-config.js";
//POR CONTA DA FOREIGN KEY É NESSESSÁRIO IMPORTAR CLIENTES
import Clientes from "./Cliente.js";

const Pedidos = conection.define("Pedidos", {
    qtd: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    cliente: {
        type: sequelize.INTEGER,
        references: {
            model: Clientes,
            key: "id",
        },
        allowNull: false,
    },
    total: {
        type: sequelize.DECIMAL(10,2),
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

Pedidos.belongsTo(Clientes, {
    foreignKey: "cliente", // Nome da FK no modelo Pedidos
    as: "clienteId"            // Alias da associação
});

Pedidos.sync({ force: false });
export default Pedidos;
