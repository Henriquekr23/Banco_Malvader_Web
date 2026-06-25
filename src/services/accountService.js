import pool from '../config/dbConfig.js';

const myaccount = async (dados) => {
    const {cpf} = dados;
    if (!cpf) throw new Error("Dados não encontrados");
    try {
        const { rows } = await pool.query(
            'SELECT nome_usuario, email_usuario, data_criacao FROM tb01_usuario WHERE cpf_usuario = $1',
            [cpf]
        );

        if (rows.length === 0) throw new Error("Usuários não encontrado");

        const usuario = rows[0];

        return usuario;
    } catch(error) {
        throw new Error("Erro: ", error);
    }
};

export default { myaccount };