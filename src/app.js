import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes';
import viewRoutes from './routes/viewRoutes';

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
app.use('/', viewRoutes);

export default app;