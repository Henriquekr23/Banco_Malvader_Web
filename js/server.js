let mysql = require('mysql2');

const express = require('express');
const app = express()

app.use(express.json());

// Conexão ao banco mysql
// futuramente tirar a senha daqui do client
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "230206",
    database: "banco_malvader"
});

con.connect(function(error){
    if(error) throw error
    console.log("Conectado ao Banco")
});

const rotasCadastro = require('./cadastro')(con);

app.use('/cadastro', rotasCadastro);  

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});