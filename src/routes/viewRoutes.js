import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.resolve(__dirname, '../..');

const router = express.Router();

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

export default router;