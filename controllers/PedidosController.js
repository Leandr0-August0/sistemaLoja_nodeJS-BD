import express from "express";
const router = express.Router();

import Pedidos from "../models/Pedido.js";
import Clientes from "../models/Cliente.js";

// ROTA PEDIDOS
router.get("/pedidos", (req, res) => {
    Pedidos.findAll({
        include: {
            model: Clientes, // Modelo relacionado
            as: "clienteId", // Alias definido na associação
            attributes: ["nome"], // Somente o campo "nome" do cliente será incluído
        },
    }).then((pedidos) => {
        res.render("pedidos", {
            pedidos: pedidos,
        });
    });
});

//ROTA DE CADASTRO
router.post("/pedidos/new", (req, res) => {
    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
        const day = String(d.getDate()).padStart(2, "0");
        const hours = String(d.getHours()).padStart(2, "0");
        const minutes = String(d.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:00`; // Retorna no formato esperado
    }

    const cliente = req.body.cliente;
    const qtd = req.body.qtd;
    const total = req.body.total;
    const datPedido = formatDate(req.body.datPedido);
    const datEnvio = req.body.datEnvio ? formatDate(req.body.datEnvio) : null;
    const datEntrega = req.body.datEntrega
        ? formatDate(req.body.datEntrega)
        : null;

    Pedidos.create({
        cliente: cliente,
        qtd: qtd,
        total: total,
        datPedido: datPedido,
        datEnvio: datEnvio,
        datEntrega: datEntrega,
    }).then(() => {
        res.redirect("/pedidos");
    });
});

//ROTA DE EXCLUSÃO
router.get("/pedidos/cancelar/:id", (req, res) => {
    const id = req.params.id;
    Pedidos.destroy({
        where: {
            id: id,
        },
    })
        .then(() => {
            res.redirect("/pedidos");
        })
        .catch((error) => {
            console.log(error);
        });
});

//ROTA DE EDIÇÃO
router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id;
    Pedidos.findByPk(id, {
        include: {
            model: Clientes, // Faz o INNER JOIN com a tabela Cliente
            as: 'clienteId',
            attributes: ["nome"], // Inclui apenas o campo "nome" do Cliente
        },
    })
        .then((pedidos) => {
            res.render("pedidoEdit", {
                pedidos: pedidos,
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

//ROTA PARA ALTERAÇÃO
router.post("/pedidos/update", (req, res) => {
    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
        const day = String(d.getDate()).padStart(2, "0");
        const hours = String(d.getHours()).padStart(2, "0");
        const minutes = String(d.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:00`; // Retorna no formato esperado
    }

    const cliente = req.body.cliente;
    const qtd = req.body.qtd;
    const total = req.body.total;
    const datPedido = formatDate(req.body.datPedido);
    const datEnvio = req.body.datEnvio ? formatDate(req.body.datEnvio) : null;
    const datEntrega = req.body.datEntrega
        ? formatDate(req.body.datEntrega)
        : null;
    Pedidos.update(
        {
            cliente: cliente,
            qtd: qtd,
            total: total,
            datPedido: datPedido,
            datEnvio: datEnvio,
            datEntrega: datEntrega,
        },
        {
            where: {
                cliente: cliente,
            },
        }
    )
        .then(() => {
            res.redirect("/pedidos");
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
