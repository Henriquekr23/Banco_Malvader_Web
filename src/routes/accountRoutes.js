import express from 'express';
import * as accountController from '../controllers/accountController.js';

const router = express.Router();

router.get('/myaccount/:cpf', accountController.myaccount);

export default router;