import pool from '../config/dbConfig.js';

async function createTable01() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS tb01_usuario (
            cpf_usuario CHAR(11) PRIMARY KEY,
            nome_usuario VARCHAR(250) NOT NULL,
            email_usuario VARCHAR(100) UNIQUE NOT NULL,
            senha_usuario VARCHAR(255) NOT NULL,
            data_criacao TIMESTAMP DEFAULT NOW()
        )
    `);
    console.log("Tabela Pronta");
}

export default createTable01;