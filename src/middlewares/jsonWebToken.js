const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ erro: "Não autorizado" });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(403).json({ erro: "Token Inválido" });
    }
};