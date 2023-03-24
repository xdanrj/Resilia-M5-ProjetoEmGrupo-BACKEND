import database from "../infra/bd.js";

database.connection.end();

console.log("acesso ao bando de dados finalizado")