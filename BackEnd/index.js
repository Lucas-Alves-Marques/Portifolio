import { router } from './modules/routes/routes.js';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors({

    origin: 'http://localhost:3000'

}));

app.use('/', router);

app.listen(PORT,() => { console.log(`Backend do Portifolio Rodando na Porta ${PORT}`)});