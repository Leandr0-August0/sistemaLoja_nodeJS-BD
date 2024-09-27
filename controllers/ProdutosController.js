import express from "express";
const router = express.Router();
import Produtos from "../models/Produto.js";
import Categorias from "../models/Categoria.js";

// ROTA PRODUTOS
router.get("/produtos", (req, res) => {
    Categorias.findAll({
        include: {
            model: Produtos,
            required: false, // Isso faz um LEFT JOIN, mude para true para INNER JOIN
        },
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
