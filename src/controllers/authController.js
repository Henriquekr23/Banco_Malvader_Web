const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    try {
        const usuario = await authService.register(req.body);
        res.status(201).json(usuario);
    } catch(error) {
        res.status(400).json({ Erro: error.mensagem });
    }
};

exports.login = async(req, res) => {
    try {
        const usuario = await authService.login(req.body);
        const token = jwt.sign(
            {id: usuario.id, email: usuario.email},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );
        
        res.cookie('token', token, {
            httpOnly: true, // Protege contra XSS
            secure: false,
            sameSite: 'strict', // Protege contra CSRF
            maxAge: 60*60*1000
        });
        res.status(200).json({ mensagem: "Login realizado com sucesso!" });
    } catch(error) {
        res.status(400).json({ erro: error.mensagem });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ mensagem: "Logout Realizado com sucesso!" });
};

exports.me = async(req, res) => {
    const token = req.cookies.token

    if (token) res.json({
        logged: true,
        user: req.user
    });
};