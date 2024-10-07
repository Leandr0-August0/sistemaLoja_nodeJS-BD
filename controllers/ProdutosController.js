import express from "express";
const router = express.Router();
import Produtos from "../models/Produto.js";
import Categorias from "../models/Categoria.js";
import Sequelize from "sequelize";

// ROTA PRODUTOS
router.get("/produtos", (req, res) => {
    Categorias.findAll({
        include: {
            model: Produtos,
            as: "produtos",
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

//ROTA DE CADASTRO
router.post("/produto/new", (req, res) => {
    const categoria = req.body.categoria;
    const produto = req.body.produto;
    const valor = req.body.valor;
    const imagem = req.body.imagem;
    Produtos.create({
        produto: produto,
        categoria: categoria,
        valor: valor,
        imagem: imagem,
        avaliacao: null,
    })
        .then(() => {
            res.redirect("/produtos");
        })
        .catch((error) => {
            console.log(error);
        });
});

router.post("/categoria/new", (req, res) => {
    const categoria = req.body.nomeCat;
    Categorias.create({
        categoria: categoria,
    })
        .then(() => {
            res.redirect("/produtos");
        })
        .catch((error) => {
            console.log(error);
        });
});

//ROTA DE EDIÇÃO
router.get("/produto/edit/:id", (req, res) => {
    const id = req.params.id;
    Produtos.findByPk(id, {
        include: {
            model: Categorias,
            as: "categoriaId",
            attributes: ["categoria"],
        },
    }).then((prodEdit) => {
        res.render("produtoEdit", {
            produtos: prodEdit,
        });
    });
});

//ROTA DE ALTERAÇÃO
router.post("/produto/update", (req, res) => {
    // const id = req.body.id;
    // const categoria = req.body.categoria;
    // const produto = req.body.produto;
    // const valor = req.body.valor;
    // const imagem = req.body.imagem;
    const { id, categoria, produto, valor, imagem } = req.body;
    
    Produtos.update(
        {
            categoria: categoria,
            produto: produto,
            valor: valor,
            imagem: imagem,
        },
        {
            where: {
                id: id,
            },
        }
    )
        .then(() => {
            res.redirect("/produtos");
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
