import express from "express";
const router = express.Router();
// Importando o model de Cliente
import Clientes from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", (req, res) => {
    Clientes.findAll().then((clientes) => {
        res.render("clientes", {
            clientes: clientes,
        });
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
    }).then(() => {
        res.redirect("/clientes");
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
  }).then(() => {
      res.redirect("/clientes");
    }).catch((error) => {
      console.log(error);
    });
});

export default router;
