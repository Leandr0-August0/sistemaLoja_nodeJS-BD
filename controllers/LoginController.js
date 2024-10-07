import express from "express";
const router = express.Router();

import Administrador from "../models/AdminTbl";

//rota de checagem
router.get("/entrar", (req, res) => {
    const { login, senha } = req.body;
    Administrador
        // como checar se os valores inseridos condizem com um usuário admin???

        .then(() => {
            res.redirect("/home");
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get("/cadastrar", (req, res) => {
    res.render("cadastro");
});
