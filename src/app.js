require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const basePath = path.resolve(__dirname, '..');

const authRoutes = require('./routes/authRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())
app.use(express.static(path.join(basePath, 'public')));

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(basePath, 'views', 'login.html'));
// });

app.use('/api/auth', authRoutes);
app.use('/', viewRoutes);

module.exports = app;