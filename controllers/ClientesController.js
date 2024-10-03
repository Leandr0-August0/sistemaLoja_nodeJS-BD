import express from "express";
const router = express.Router();
// Importando o model de Cliente
import Clientes from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", (req, res) => {
    Clientes.findAll()
        .then((clientes) => {
            res.render("clientes", {
                clientes: clientes,
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
    // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
    const nome = req.body.nome;
    const email = req.body.email;
    const tel = req.body.tel;
    Clientes.create({
        nome: nome,
        email: email,
        tel: tel,
    })
        .then(() => {
            res.redirect("/clientes");
        })
        .catch((error) => {
            console.log(error);
        });
});

// ROTA DE EXCLUSÃO DE CLIENTES
// ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/clientes/delete/:id", (req, res) => {
    // COLETAR O ID QUE VEIO NA URL
    const id = req.params.id;
    // MÉTODO PARA EXCLUIR
    Clientes.destroy({
        where: {
            id: id,
        },
    })
        .then(() => {
            res.redirect("/clientes");
        })
        .catch((error) => {
            console.log(error);
        });
});

//ROTA DE EDIÇÃO
router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id;
    Clientes.findByPk(id)
        .then((cliente) => {
            res.render("clienteEdit", {
                cliente: cliente,
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

//ROTA PARA ALTERAÇÃO
router.post("/clientes/update", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const tel = req.body.tel;
    Clientes.update(
        {
            nome: nome,
            email: email,
            tel: tel,
        },
        {
            where: {
                id: id,
            },
        }
    )
        .then(() => {
            res.redirect("/clientes");
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
