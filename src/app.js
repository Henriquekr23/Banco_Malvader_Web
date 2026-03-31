require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:3000', //só permite requisições deste endereço
    credentials: true //permite o uso de credenciais
}));

app.use(express.json());
app.use(cookieParser())

app.use('/register', registerRoutes);
app.use('/auth', authRoutes);

module.exports = app;