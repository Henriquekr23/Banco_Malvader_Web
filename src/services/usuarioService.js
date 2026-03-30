const db = require('../config/dataBase');

exports.cadastrar = async (dados) => {
    const {nome, email, senha, cpf} = dados;

    if (!nome || !email || !senha || !cpf) {
        throw new Error("Campos Obrigatórios");
    }

    await db.query(
        'INSERT INTO usuario (nome, email, senha, cpf) VALUES (?, ?, ?, ?)',
        [nome, email, senha, cpf]
    );

    return {mensagem: "Usuário Criado"};
};