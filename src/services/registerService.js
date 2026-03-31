const db = require('../config/dataBase');

exports.register = async (dados) => {
    const {nome, email, senha, cpf} = dados;

    if (!nome || !email || !senha || !cpf) {
        throw new Error("Campos Obrigatórios");
    }

    const [rows] = await db.query(
        'SELECT * FROM usuario WHERE email = ? OR cpf = ?',
        [email, cpf]
    );

    if (rows.length === 0){
        throw new Error("Usuário já cadastrado no sistema");
    }

    await db.query(
        'INSERT INTO usuario (nome, email, senha, cpf) VALUES (?, ?, ?, ?)',
        [nome, email, senha, cpf]
    );

    return {mensagem: "Usuário Registrado"};
};