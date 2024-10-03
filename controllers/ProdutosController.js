import express from "express";
const router = express.Router();
import Produtos from "../models/Produto.js";
import Categorias from "../models/Categoria.js";
import Sequelize from "sequelize";

// ROTA PRODUTOS
router.get("/produtos", (req, res) => {
    Categorias.findAll({
        include: [
            {
                model: Produtos,
                as: 'produtos',
                required: false, // Isso faz um LEFT JOIN, mude para true para INNER JOIN
            },
        ],
        // attributes: {
        //     include: [
        //         [
        //             Sequelize.fn("COUNT", Sequelize.col("produtos.id")),
        //             "produtosCount",
        //         ],
        //     ],
        // },
        // group: ["Categorias.id"],
    })
        .then((categorias) => {
            res.render("produtos", {
                categorias: categorias,
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
