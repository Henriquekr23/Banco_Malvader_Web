import 'dotenv/config';
import app from './src/app.js'

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando http://localhost:${process.env.SERVER_PORT}`);
});