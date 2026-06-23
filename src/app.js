import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import createTable01 from './database/createDB.js';

import authRoutes from './routes/authRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import viewRoutes from './routes/viewRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.resolve(__dirname, '..');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(basePath, 'public')));

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(basePath, 'views', 'login.html'));
// });

app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/', viewRoutes);

// Função de criar tabela no postgress
createTable01();

export default app;