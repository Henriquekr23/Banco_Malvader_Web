require('dotenv').config();
const app = require('./src/app')

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando http://localhost:${process.env.SERVER_PORT}`);
});