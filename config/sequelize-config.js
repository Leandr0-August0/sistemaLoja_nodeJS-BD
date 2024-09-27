//IMPORTANDO O SEQUELIZE
import Sequelize from "sequelize";

//CRIANDO OS DADOS DE CONEXÃO COM O BANCO DE DADOS
const conection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "loja",
    timezone: "-03:00",
});

export default conection;
