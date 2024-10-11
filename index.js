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
import LoginController from './controllers/LoginController.js'

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
app.use('/', LoginController)

//ROTA PRINCIPAL
// app.get("/", (req, res) => {
//     res.redirect("/login");
// });
app.get("/", (req, res) => {
    res.render("home");
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