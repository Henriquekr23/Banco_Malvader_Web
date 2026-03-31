const registerService = require('../services/registerService');

exports.register = async (req, res) => {
    try {
        // Retorna User Created(201)
        const usuario = await registerService.register(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        // Retorna Bad Request(400)
        res.status(400).json({ erro: error.message });
    }
};