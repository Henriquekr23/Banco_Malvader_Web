import express from 'express';
import * as authController from '../controllers/authController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', authMiddleware.login, authController.me);

export default router;