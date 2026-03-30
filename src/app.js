const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.use('/usuario', usuarioRoutes);

module.exports = app;