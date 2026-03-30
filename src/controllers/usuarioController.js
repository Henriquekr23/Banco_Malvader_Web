const usuarioService = require('../services/usuarioService');

exports.cadastrar = async (req, res) => {
    try {
        // Retorna User Created(201)
        const usuario = await usuarioService.cadastrar(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        // Retorna Bad Request(400)
        res.status(400).json({ erro: error.message });
    }
};