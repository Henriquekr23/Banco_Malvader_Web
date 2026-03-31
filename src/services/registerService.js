const db = require('../config/dataBase');
const { hashPassword } = require('../utils/hashPassword');

exports.register = async (dados) => {
    const {nome, email, senha, cpf} = dados;
    
    if (!nome || !email || !senha || !cpf) {
        throw new Error("Campos Obrigatórios");
    }

    try {
        const [rows] = await db.query(
            'SELECT id_usuario FROM TB01_USUARIO WHERE email_usuario = ? OR cpf_usuario = ?',
            [email, cpf]
        );
    
        if (rows.length > 0){
            throw new Error("Usuário já cadastrado no sistema");
        }
        
        const senhaHash = await hashPassword(senha)
    
        await db.query(
            'INSERT INTO TB01_USUARIO (nome_usuario, email_usuario, senha_usuario, cpf_usuario) VALUES (?, ?, ?, ?)',
            [nome, email, senhaHash, cpf]
        );
        
        return { mensagem: "Usuário Registrado" };
    } catch (error) {
        console.error("ERRO:", error);
        throw error; 
    }
};