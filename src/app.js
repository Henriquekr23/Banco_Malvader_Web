require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));

app.use(cors({
    origin: true,
    credentials: true //permite o uso de credenciais
}));

app.use(express.json());
app.use(cookieParser())

app.use('/api/register', registerRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;