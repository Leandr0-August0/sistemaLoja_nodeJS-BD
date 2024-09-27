//IMPORTANDO O EXPRESS
import express from "express";

//INICIANDO O EXPRESS NA VARIÁVEL APP
const app = express();

//INICIANDO O SEQUELIZE COM OS DADOS DA CONEXÃO
import conection from "./config/sequelize-config.js";

//IMPORTANDO OS CONTROLLERS (ONDE ESTÃO AS ROTAS)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

//PERMITINDO CAPTURAR OS DADOS VINDOS DO FORMULÁRIO
app.use(express.urlencoded({ extended: false }));

//REALIZANDO A CONEXÃO COM O BANCO DE DADOS
conection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco realizada com sucesso!!");
    })
    .catch((error) => {
        console.log(error);
    });

//CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
conection
    .query('create database if not exists loja;')
    .then(() => {
        console.log("Banco criado com sucesso!!");
    })
    .catch((error) => {
        console.log(error);
    });

//DEFINE O EJS COMO RENDERIZADOR DE PÁGINAS
app.set("view engine", "ejs");

//SEFINE O USO DA PASRA 'public' PARA USO DE ARQUIVOS ESTÁTICOS
app.use(express.static("public"));

//DEFININDO O SO DAS ROTAS DOS CONTROLLERS
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

//ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.render("index");
});

//INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, (error) => {
    if (error) {
        console.log(`Ocorreu um erro ao iniciar o servidor: ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});

// const express = require("express");

// const app = express();

// app.set("view engine", "ejs");

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/clientes", (req, res) => {
//     const clientes = [
//         {
//             id: 1,
//             nome: "João Silva",
//             email: "joao.silva@example.com",
//             telefone: "(11) 99999-9999",
//         },
//         {
//             id: 2,
//             nome: "Maria Souza",
//             email: "maria.souza@example.com",
//             telefone: "(21) 88888-8888",
//         },
//         {
//             id: 3,
//             nome: "Pedro Costa",
//             email: "pedro.costa@example.com",
//             telefone: "(31) 77777-7777",
//         },
//         {
//             id: 4,
//             nome: "Ana Pereira",
//             email: "ana.pereira@example.com",
//             telefone: "(41) 66666-6666",
//         },
//         {
//             id: 5,
//             nome: "Carlos Oliveira",
//             email: "carlos.oliveira@example.com",
//             telefone: "(51) 55555-5555",
//         },
//         {
//             id: 6,
//             nome: "Juliana Almeida",
//             email: "juliana.almeida@example.com",
//             telefone: "(61) 44444-4444",
//         },
//         {
//             id: 7,
//             nome: "Roberto Lima",
//             email: "roberto.lima@example.com",
//             telefone: "(71) 33333-3333",
//         },
//         {
//             id: 8,
//             nome: "Fernanda Santos",
//             email: "fernanda.santos@example.com",
//             telefone: "(81) 22222-2222",
//         },
//         {
//             id: 9,
//             nome: "Lucas Martins",
//             email: "lucas.martins@example.com",
//             telefone: "(91) 11111-1111",
//         },
//         {
//             id: 10,
//             nome: "Tatiane Silva",
//             email: "tatiane.silva@example.com",
//             telefone: "(21) 98765-4321",
//         },
//         {
//             id: 11,
//             nome: "Ricardo Almeida",
//             email: "ricardo.almeida@example.com",
//             telefone: "(31) 97654-3210",
//         },
//         {
//             id: 12,
//             nome: "Camila Souza",
//             email: "camila.souza@example.com",
//             telefone: "(41) 96543-2109",
//         },
//         {
//             id: 13,
//             nome: "Gustavo Oliveira",
//             email: "gustavo.oliveira@example.com",
//             telefone: "(51) 95432-1098",
//         },
//         {
//             id: 14,
//             nome: "Bruna Costa",
//             email: "bruna.costa@example.com",
//             telefone: "(61) 94321-0987",
//         },
//         {
//             id: 15,
//             nome: "Eduardo Lima",
//             email: "eduardo.lima@example.com",
//             telefone: "(71) 93210-9876",
//         },
//     ];
//     res.render("clientes", { clientes: clientes });
// });

// app.get("/pedidos", (req, res) => {
//     const pedidos = [
//         {
//             id: 1,
//             cliente: "João Silva",
//             qntdProdutos: 5,
//             dataPedido: "2024-09-01",
//             prazoEnvio: "2024-09-05",
//             prazoEntrega: "2024-09-10",
//         },
//         {
//             id: 2,
//             cliente: "Maria Souza",
//             qntdProdutos: 3,
//             dataPedido: "2024-09-02",
//             prazoEnvio: "2024-09-06",
//             prazoEntrega: "2024-09-12",
//         },
//         {
//             id: 3,
//             cliente: "Pedro Costa",
//             qntdProdutos: 8,
//             dataPedido: "2024-09-03",
//             prazoEnvio: "2024-09-07",
//             prazoEntrega: "2024-09-15",
//         },
//         {
//             id: 4,
//             cliente: "Ana Pereira",
//             qntdProdutos: 2,
//             dataPedido: "2024-09-04",
//             prazoEnvio: "2024-09-08",
//             prazoEntrega: "2024-09-11",
//         },
//         {
//             id: 5,
//             cliente: "Carlos Oliveira",
//             qntdProdutos: 4,
//             dataPedido: "2024-09-05",
//             prazoEnvio: "2024-09-09",
//             prazoEntrega: "2024-09-13",
//         },
//         {
//             id: 6,
//             cliente: "Juliana Almeida",
//             qntdProdutos: 6,
//             dataPedido: "2024-09-06",
//             prazoEnvio: "2024-09-10",
//             prazoEntrega: "2024-09-14",
//         },
//         {
//             id: 7,
//             cliente: "Roberto Lima",
//             qntdProdutos: 7,
//             dataPedido: "2024-09-07",
//             prazoEnvio: "2024-09-11",
//             prazoEntrega: "2024-09-16",
//         },
//         {
//             id: 8,
//             cliente: "Fernanda Santos",
//             qntdProdutos: 1,
//             dataPedido: "2024-09-08",
//             prazoEnvio: "2024-09-12",
//             prazoEntrega: "2024-09-15",
//         },
//         {
//             id: 9,
//             cliente: "Lucas Martins",
//             qntdProdutos: 9,
//             dataPedido: "2024-09-09",
//             prazoEnvio: "2024-09-13",
//             prazoEntrega: "2024-09-17",
//         },
//         {
//             id: 10,
//             cliente: "Tatiane Silva",
//             qntdProdutos: 5,
//             dataPedido: "2024-09-10",
//             prazoEnvio: "2024-09-14",
//             prazoEntrega: "2024-09-18",
//         },
//         {
//             id: 11,
//             cliente: "João Silva",
//             qntdProdutos: 3,
//             dataPedido: "2024-09-11",
//             prazoEnvio: "2024-09-15",
//             prazoEntrega: "2024-09-20",
//         },
//         {
//             id: 12,
//             cliente: "Ricardo Almeida",
//             qntdProdutos: 10,
//             dataPedido: "2024-09-12",
//             prazoEnvio: "2024-09-16",
//             prazoEntrega: "2024-09-21",
//         },
//         {
//             id: 13,
//             cliente: "Ana Pereira",
//             qntdProdutos: 4,
//             dataPedido: "2024-09-13",
//             prazoEnvio: "2024-09-17",
//             prazoEntrega: "2024-09-22",
//         },
//         {
//             id: 14,
//             cliente: "Maria Souza",
//             qntdProdutos: 6,
//             dataPedido: "2024-09-14",
//             prazoEnvio: "2024-09-18",
//             prazoEntrega: "2024-09-23",
//         },
//         {
//             id: 15,
//             cliente: "Eduardo Lima",
//             qntdProdutos: 2,
//             dataPedido: "2024-09-15",
//             prazoEnvio: "2024-09-19",
//             prazoEntrega: "2024-09-24",
//         },
//         {
//             id: 16,
//             cliente: "João Silva",
//             qntdProdutos: 4,
//             dataPedido: "2024-09-16",
//             prazoEnvio: "2024-09-20",
//             prazoEntrega: "2024-09-25",
//         },
//         {
//             id: 17,
//             cliente: "Tatiane Silva",
//             qntdProdutos: 8,
//             dataPedido: "2024-09-17",
//             prazoEnvio: "2024-09-21",
//             prazoEntrega: "2024-09-26",
//         },
//         {
//             id: 18,
//             cliente: "Carlos Oliveira",
//             qntdProdutos: 3,
//             dataPedido: "2024-09-18",
//             prazoEnvio: "2024-09-22",
//             prazoEntrega: "2024-09-27",
//         },
//         {
//             id: 19,
//             cliente: "Lucas Martins",
//             qntdProdutos: 7,
//             dataPedido: "2024-09-19",
//             prazoEnvio: "2024-09-23",
//             prazoEntrega: "2024-09-28",
//         },
//         {
//             id: 20,
//             cliente: "Fernanda Santos",
//             qntdProdutos: 9,
//             dataPedido: "2024-09-20",
//             prazoEnvio: "2024-09-24",
//             prazoEntrega: "2024-09-29",
//         },
//     ];

//     res.render("pedidos", { pedidos: pedidos });
// });

// app.get("/produtos", (req, res) => {
//     const categorias = ["Esporte", "Casual", "Moda Feminina"];
//     const listaEsporte = [
//         {
//             produto: "Nike Revolution 7",
//             valor: 250.5,
//             imagem: "https://cadiles.vtexassets.com/arquivos/ids/200791-1200-1200?v=638451759923170000&width=1200&height=1200&aspect=true",
//         },
//         {
//             produto: "Under Dagger 4",
//             valor: 329.99,
//             imagem: "https://oscarcalcados.vtexassets.com/arquivos/ids/6927503/image-c07a7a16ea9b481aac049077caf00110.jpg?v=638439674283970000",
//         },
//         {
//             produto: "Olimpikus Venum",
//             valor: 140.6,
//             imagem: "https://d2tgkknf0jkrgw.cloudfront.net/Custom/Content/Products/75/26/75264_olympikus-252-venum-marinho-limao252-venum-715736_m5_638283235944511012.png",
//         },
//         {
//             produto: "Adidas Ultimashow",
//             valor: 190.5,
//             imagem: "https://static.allianzparqueshop.com.br/produtos/tenis-adidas-ultimashow-masculino/26/NQQ-6927-326/NQQ-6927-326_zoom1.jpg?ts=1695700276",
//         },
//         {
//             produto: "Puma Flyer Runner",
//             valor: 170.0,
//             imagem: "https://oscarcalcados.vtexassets.com/arquivos/ids/4296556/image-24139a9e594c45298428725f3bdaf9d7.jpg?v=638246997575900000",
//         },
//         {
//             produto: "Nike Air Zoom Pegasus",
//             valor: 450.0,
//             imagem: "https://aesportiva.vteximg.com.br/arquivos/ids/359357-1000-1000/1_094336_0427.jpg?v=638170460682500000",
//         },
//         {
//             produto: "Adidas Runfalcon",
//             valor: 230.0,
//             imagem: "https://static.kapiva.com.br/public/kapiva/imagens/produtos/tenis-adidas-runfalcon-2-0-preto-branco-amarelo-4370.png",
//         },
//         {
//             produto: "Mizuno Wave Prophecy",
//             valor: 899.99,
//             imagem: "https://mizunobr.vtexassets.com/arquivos/ids/232355-800-800?v=638191789429700000&width=800&height=800&aspect=true",
//         },
//         {
//             produto: "Asics Gel Nimbus",
//             valor: 750.0,
//             imagem: "https://asicsbr.vteximg.com.br/arquivos/ids/477344-1000-1000/null.jpg",
//         },
//         {
//             produto: "Fila Kenya Racer",
//             valor: 299.99,
//             imagem: "https://mediacdn.wtennis.com.br/catalog/product/f/i/fila_kenya_racer_kr5_ag_13_1019318_1.jpg",
//         },
//         {
//             produto: "New Balance 1080v11",
//             valor: 550.0,
//             imagem: "https://acdn.mitiendanube.com/stores/001/166/827/products/tenis_new_balance_1080v12_corrida_9233_1_f246e224a09e28a4e526ba3db68c47cb1-6e0133e441312b91eb16776156242004-640-0.jpg",
//         },
//         {
//             produto: "Saucony Endorphin Speed",
//             valor: 600.0,
//             imagem: "https://m.media-amazon.com/images/I/31cjbwDJwtL._AC_UL240_SR240,220_.jpg",
//         },
//         {
//             produto: "Brooks Ghost 14",
//             valor: 520.0,
//             imagem: "https://static.runnea.pt/images/202402/brooks-ghost-14-gtx-sapatilhas-running-514x514x90xX.jpg?1",
//         },
//     ];

//     const listaCasual = [
//         {
//             produto: "Fila Acd Classic SE",
//             valor: 320.99,
//             imagem: "https://imgmarketplace.lojasrenner.com.br/20001/3631/7010702382469/7510705405186/0.jpeg",
//         },
//         {
//             produto: "Adidas Breaknet",
//             valor: 189.99,
//             imagem: "https://cdn.awsli.com.br/600x1000/1343/1343110/produto/246990950/whatsapp-image-2024-01-04-at-09-57-05-17dqvqopv8.jpeg",
//         },
//         {
//             produto: "Mormaii Urban One",
//             valor: 151.85,
//             imagem: "https://imgcentauro-a.akamaihd.net/1366x1366/M14JCQ15.jpg",
//         },
//         {
//             produto: "Lacoste Europa",
//             valor: 299.99,
//             imagem: "https://esportelegal.fbitsstatic.net/img/p/tenis-lacoste-europa-masculino-95278/332397-1.jpg?w=800&h=800&v=no-change&qs=ignore",
//         },
//         {
//             produto: "Olympikus Only 2",
//             valor: 175.9,
//             imagem: "https://vulcabras.vtexassets.com/arquivos/ids/210963/43711902_2-005-01.jpg?v=637590152498630000",
//         },
//         {
//             produto: "Nike Air Max",
//             valor: 499.9,
//             imagem: "https://artwalk.vtexassets.com/arquivos/ids/491436/FD581-0-101-1.jpg?v=638470727183030000",
//         },
//         {
//             produto: "Puma RS-X",
//             valor: 379.99,
//             imagem: "https://images.tcdn.com.br/img/img_prod/1048024/tenis_puma_rs_x_3d_geek_branco_394312_05_7765_1_f396190b9a6435efb288841f1221a23a.jpg",
//         },
//         {
//             produto: "New Balance 574",
//             valor: 299.0,
//             imagem: "https://cdn.bnws3.com.br/b2online.com.br/image/cache/data/produtos/new-balance/masculino/tenis-new-balance-574-v2-masculino-marinho---cinza-8785-23-08-15-1200x1200.jpg",
//         },
//         {
//             produto: "Asics Gel-Lyte III",
//             valor: 450.0,
//             imagem: "https://d1ubrw5u7b0xq6.cloudfront.net/Custom/Content/Products/50/56/5056_asics-gel-lyte-iii-og1201a482-800_l3_637671499073929644.jpg",
//         },
//     ];

//     const listaFeminino = [
//         {
//             produto: "Nike Downshifter 12",
//             valor: 253.99,
//             imagem: "https://cdnv2.moovin.com.br/kenpo/imagens/produtos/lista/tenis-nike-downshifter-12-feminino-bege-roxo-d9d1fc94b5ab98bd019b4b1febcc124b.jpg",
//         },
//         {
//             produto: "Everlast Force 2",
//             valor: 225.99,
//             imagem: "https://cdn.awsli.com.br/600x700/2472/2472960/produto/288250022/d4d901a35618ea520eecf86616e16d56-4xas8vm9w7.png",
//         },
//         {
//             produto: "Fila Renno Sport",
//             valor: 399.99,
//             imagem: "https://imgcentauro-a.akamaihd.net/1366x1366/M11WGO01.jpg",
//         },
//         {
//             produto: "Mizuno Action 3",
//             valor: 423.5,
//             imagem: "https://mizunobr.vtexassets.com/arquivos/ids/233770-800-800?v=638223640435600000&width=800&height=800&aspect=true",
//         },
//         {
//             produto: "Adidas Duramo 10",
//             valor: 299.9,
//             imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLpbvGWz_7hw5UABq781sF-wMg09-QWfnxQ&s",
//         },
//         {
//             produto: "Puma Flyer Runner",
//             valor: 189.99,
//             imagem: "https://d2ne65t3epzl8v.cloudfront.net/Custom/Content/Products/99/22/992277_tenis-puma-flyer-runner-feminino-12866_l20_637437407506726722.jpg",
//         },
//         {
//             produto: "Asics Gel Pulse",
//             valor: 379.99,
//             imagem: "https://imgcentauro-a.akamaihd.net/1366x1366/99004876.jpg",
//         },
//         {
//             produto: "Reebok Royal Glide",
//             valor: 199.99,
//             imagem: "https://i.ebayimg.com/thumbs/images/g/hrMAAOSwuE9kekmw/s-l1200.jpg",
//         },
//         {
//             produto: "Under Armour Charged",
//             valor: 459.99,
//             imagem: "https://images.tcdn.com.br/img/img_prod/1028923/tenis_under_armour_charged_slight_2_feminino_branco_9966_1_42ca51bfe8a40da65ac046324bb6287a.jpg",
//         },
//         {
//             produto: "New Balance 574",
//             valor: 499.9,
//             imagem: "https://static.netshoes.com.br/produtos/tenis-new-balance-574-casual-feminino/14/D17-3554-014/D17-3554-014_zoom1.jpg?ts=1566894727&ims=544x",
//         },
//         {
//             produto: "Nike Air Max 270",
//             valor: 599.9,
//             imagem: "https://imgcentauro-a.akamaihd.net/1366x1366/98807201.jpg",
//         },
//         {
//             produto: "Adidas Ultraboost",
//             valor: 649.9,
//             imagem: "https://acdn.mitiendanube.com/stores/001/153/552/products/ie1775_11-27c10b1e8ab49d547a16847888787994-640-0.jpg",
//         },
//         {
//             produto: "Puma RS-X",
//             valor: 329.99,
//             imagem: "https://images.puma.net/images/371008/28/sv01/fnd/BRA/",
//         },
//         {
//             produto: "Olympikus Cyber",
//             valor: 239.99,
//             imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/dsrnnptx/2.jpg",
//         },
//         {
//             produto: "Fila Disruptor",
//             valor: 359.9,
//             imagem: "https://static.netshoes.com.br/produtos/tenis-fila-disruptor-pride-feminino/24/I6E-8037-024/I6E-8037-024_zoom1.jpg?ts=1722354298&ims=326x",
//         },
//         {
//             produto: "Mizuno Wave Prophecy",
//             valor: 799.9,
//             imagem: "https://imgcentauro-a.akamaihd.net/1300x1300/9571051E.jpg",
//         },
//         {
//             produto: "Everlast Climber",
//             valor: 219.9,
//             imagem: "https://www.urblab.com.br/cdn/shop/files/SEFA91B_01.jpg?v=1723514277",
//         },
//         {
//             produto: "Asics Kayano",
//             valor: 649.9,
//             imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FFp21MdYzZYoNeJiO-3wb9AFN3fc6hzARg&s",
//         },
//         {
//             produto: "Reebok Nano X",
//             valor: 549.9,
//             imagem: "https://static.hupishop.com.br/public/hupibikes/imagens/produtos/tenis-reebok-nano-x4-feminino-branco-6622c89f8624f.jpg",
//         },
//         {
//             produto: "Nike Pegasus 39",
//             valor: 459.9,
//             imagem: "https://images.tcdn.com.br/img/img_prod/789590/180_tenis_nike_air_zoom_pegasus_40_feminino_azul_claro_5965_1_313b391f96a9c48eef9e46a91accb99c.jpg",
//         },
//         {
//             produto: "Fila Racer T2 S",
//             valor: 499.99,
//             imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P_KxJOzTkmOir6z0DZAdX847MJdZqPO9LA&s",
//         },
//         {
//             produto: "New Balance 680v6",
//             valor: 389.9,
//             imagem: "https://m.media-amazon.com/images/I/718EcZhutgL._AC_SY695_.jpg",
//         },
//     ];

//     res.render("produtos", {
//         categorias: categorias,
//         listaEsporte: listaEsporte,
//         listaCasual: listaCasual,
//         listaFeminino: listaFeminino,
//     });
// });

// const port = 8040;
// app.listen(port, (erro) => {
//     if (erro) {
//         console.log("Ocorreu um erro!");
//     } else {
//         console.log(
//             `Projeto iniciado com sucesso em: http://localhost:${port}`
//         );
//     }
// });
