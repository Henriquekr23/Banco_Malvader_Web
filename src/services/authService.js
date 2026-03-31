const db = require('../config/dataBase');

// exporta função de login
exports.login = async ({ email, senha }) => {

    // email e senha nulos
    if(!email || !senha) {
        throw new Error("Email e senha obrigatórios");
    }

    // seleciona os dados pelo email* e coloca na variavel linha
    const [rows] = await db.query(
        'SELECT * FROM usuario WHERE email = ?',
        [email]
    );

    // se estiver vazio a linha
    if(rows.length === 0) {
        throw new Error("Usuário não encontrado");
    }

    // cria uma variavel com os dados do usuario
    const usuario = rows[0];

    // Comparação simples e temporária (Aplicar criptografia)
    if(usuario.senha !== senha){
        throw new Error("Senha incorreta");
    }

    return usuario;
}