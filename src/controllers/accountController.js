import accountService from '../services/accountService.js';

export const myaccount = async(req, res) => {
    try {
        const usuario = await accountService.myaccount(req.body);
        res.status(201).json(usuario);
    } catch(error) {
        console.log(error);
        res.status(400).json({ Erro: error.mensagem });
    }
};