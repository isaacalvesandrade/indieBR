import 'dotenv/config';
import sql from '../db.js';  

export default async function handler(req, res) {
  try {
    const jogos = await sql`SELECT titulo, capa FROM Jogos`;
    res.status(200).json(jogos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar jogos' });
  }
}
