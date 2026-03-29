const express = require('express')

module.exports = (con) => {
    const router = express.Router();

    //Rota POST para cadastro
    router.post('/cadastro', (req, res) =>{
        
        // Corpo da requisição
        const {nome, email, senha, cpf} = req.body;

        // Se algum item for nulo retorna bad request e mensagem
        if(!nome || !email || !senha || !cpf) {
            return res.status(400).json({mensagem: "Preencha todos os campos"})
        }

        // Caso contrário insere no banco os dados
        const sql = 'INSERT INTO usuario (nome, email, senha, cpf) VALUES (?, ?, ?, ?)'

        // envia a query para o con(conexão com o db)
        // se der erro manda mensagem e internal server error(500)
        con.query(sql, [nome, email, senha, cpf], (error, result) => {
            if (error){
                console.error(error);
                return res.status(500).json({mensagem: "Erro ao cadastrar"})
            }
            
            // Sucesso na criação (201)
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
        });

    });

    return router;
};