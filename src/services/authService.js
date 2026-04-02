const db = require('../config/dataBase');
const { verifyPassword, hashPassword } = require('../utils/hashPassword');

exports.register = async(dados) => {
    const {nome, email, senha, cpf} = dados;
    if (!nome || !email || !senha || !cpf) throw new Error("Campos Obrigatórios");
    try {
        const [rows] = await db.query(
            'SELECT id_usuario FROM TB01_USUARIO WHERE email_usuario = ? OR cpf_usuario = ? ',
            [email, cpf]
        );
        if (rows.length !== 0) throw new Error("Usuário já cadastrado");
        const senhaHash = await hashPassword(senha);
        await db.query(
            'INSERT INTO TB01_USUARIO (nome_usuario, email_usuario, senha_usuario, cpf_usuario) VALUES (?, ?, ?, ?)',
            [nome, email, senhaHash, cpf]
        );
        return {mensagem: "Usuário cadastrado"};
    } catch(error) {
        throw new Error("Erro: ", error);
    }
};

exports.login = async ({ email, senha }) => {
    if(!email || !senha) throw new Error("Email e senha obrigatórios");
    try {
        const [rows] = await db.query(
            'SELECT * FROM TB01_USUARIO WHERE email_usuario = ?',
            [email]
        );

        if(rows.length === 0) throw new Error("Usuário não encontrado");

        const usuario = rows[0];

        const senhaValidaHash = await verifyPassword(usuario.senha_usuario, senha);
        if(!senhaValidaHash) throw new Error("Senha incorreta");
        
        return usuario;
    } catch(error) {
        throw new Error("Erro: ", error);
    }
};