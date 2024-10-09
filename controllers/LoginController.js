import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

import Administrador from "../models/AdminTbl.js";
import { where } from "sequelize";

// //rota para login
// router.get("/login", (req, res) => {
//     res.render("index");
// });

// //rota de checagem de login
// router.post("/check", (req, res) => {
//     const { email, senha } = req.body;
//     const login = Administrador.findOne({
//         where: {
//             email: email,
//         },
//     });

//     if (!login) {
//         return res.status(400).json({ message: "Email não registrado." });
//     } else {
//         const senhaVerificada = bcrypt.compare(senha, login.senha);

//         if (!senhaVerificada) {
//             return res.status(400).json({ message: "Senha inválida." });
//         } else {
//             res.status(200).json(
//                 "Login realizado com sucesso.",
//             );
//             res.redirect("/home").catch((error) => {
//                 console.log(error);
//             });
//         }
//     }
// });

//rota para cadastrar
router.get("/register", (req, res) => {
    res.render("register");
});

//rota que cadastra
router.post("/register/new", async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // Verificar se o email já está cadastrado
        const loginExistente = await Administrador.findOne({
            where: {
                email: email,
            },
        });

        if (loginExistente) {
            return res.status(400).json({ 
                message: "Email já cadastrado." 
            });
        }

        // Criptografar a senha
        const hashSenha = await bcrypt.hash(senha, 10);

        // Criar novo usuário no banco
        await Administrador.create({
            nome: nome,
            email: email,
            senha: hashSenha,
        });

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso.",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            message: "Erro ao cadastrar usuário." 
        });
    }
});

router.post("/register/new", async (req, res) => {
    const { nome, email, senha } = req.body;
    const emailExistente = await Administrador.findOne({
        where: {
            email: email,
        },
    });

    if (emailExistente) {
        return res.status(400).json({ message: "Email já cadastrado." });
    } else {
        const hashSenha = bcrypt.hash(senha, 10);

        // Criar novo usuário no banco
        Administrador.create({
            nome: nome,
            email: email,
            senha: hashSenha,
        });

        then(() => {
            res.status(200).json({ mensage: "Login realizado com sucesso." });
            res.redirect("/home");
        }).catch((error) => {
            console.log(error);
        });
    }
});

export default router;
