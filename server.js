import 'dotenv/config';
import express from 'express';
import sql from './db.js';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.get('/api/capatitulo', async (req, res) => {
  try {
    const jogos = await sql`SELECT titulo, capa FROM Jogos`;
    res.json(jogos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar jogos' });
  }
});


export default app;