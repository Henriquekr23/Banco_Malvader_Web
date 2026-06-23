import express from 'express';
import * as accountController from '../controllers/accountController.js';

const router = express.Router();

router.post('/myaccount', accountController.myaccount);

export default router;