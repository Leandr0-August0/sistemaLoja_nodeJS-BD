import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";
import Produtos from "./Produto.js";

const Categorias = conection.define("categorias", {
    categoria: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});

// Categorias.hasMany(Produtos, {
//     foreignKey: "categoria",
//     as: "produtos",
// });

Categorias.sync({ force: false });
export default Categorias;
