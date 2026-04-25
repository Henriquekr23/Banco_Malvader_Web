import jwt from 'jsonwebtoken';

export const login = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ erro: "Não autenticado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch {
        return res.status(403).json({ erro: "Token inválido" });
    }
};

export const register = (req, res, next) => {
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