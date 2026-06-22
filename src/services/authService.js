import pool from '../config/dbConfig.js';
import { verifyPassword, hashPassword } from '../utils/hashPassword.js';

const register = async(dados) => {
    const {nome, email, senha, cpf} = dados;
    if (!nome || !email || !senha || !cpf) throw new Error("Campos Obrigatórios");
    try {
        const { rows } = await pool.query(
            'SELECT cpf_usuario FROM tb01_usuario WHERE email_usuario = $1 OR cpf_usuario = $2 ',
            [email, cpf]
        );

        if (rows.length !== 0) throw new Error("Usuário já cadastrado");

        const senhaHash = await hashPassword(senha);
        await pool.query(
            'INSERT INTO tb01_usuario (nome_usuario, email_usuario, senha_usuario, cpf_usuario) VALUES ($1, $2, $3, $4)',
            [nome, email, senhaHash, cpf]
        );

        return {mensagem: "Usuário cadastrado"};
    } catch(error) {
        throw new Error(error);
    }
};

const login = async ({ email, senha }) => {
    if(!email || !senha) throw new Error("Email e senha obrigatórios");
    try {
        const { rows } = await pool.query(
            'SELECT * FROM tb01_usuario WHERE email_usuario = $1',
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

export default { register, login };