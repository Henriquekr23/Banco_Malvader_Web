const express = require('express');
const path = require('path');

const router = express.Router();
const basePath = path.resolve(__dirname, '..', '..');

// Função que envia o caminho da página
const renderPage = (page) =>
    (req, res) =>
        res.sendFile(path.join(basePath, 'views', `${page}.html`));

// router.get('/:page', (req, res) => {
//     const page = req.params.page;
//     res.sendFile(path.join(basePath, 'views', `${page}.html`));
// });

router.get('/', renderPage('index'));
router.get('/login', renderPage('login'));
router.get('/account', renderPage('account'));
router.get('/register', renderPage('register'));

module.exports = router;