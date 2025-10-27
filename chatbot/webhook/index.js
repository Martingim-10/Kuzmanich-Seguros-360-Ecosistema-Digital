// Webhook base — Kuzmanich Seguros 360
// Node.js + Express
// npm init -y && npm i express body-parser dotenv

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Verificación simple (Meta/Manychat)
app.get('/webhook/meta', (req, res) => {
  const VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN;
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }
  return res.sendStatus(403);
});

// Entrada de eventos (genérico)
app.post('/webhook/meta', async (req, res) => {
  // TODO: parsear eventos, identificar canal y derivar a la lógica de ramo
  console.log('Meta event:', JSON.stringify(req.body));
  res.sendStatus(200);
});

app.post('/webhook/manychat', async (req, res) => {
  // TODO: mapear payload Manychat -> función de negocio
  console.log('Manychat event:', JSON.stringify(req.body));
  res.json({ ok: true });
});

// Ejemplo: router por ramo
app.post('/router', (req, res) => {
  const { ramo } = req.body; // 'auto' | 'hogar' | 'vida' | ...
  // TODO: derivar a handler según ramo
  res.json({ routed: ramo || 'desconocido' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Webhook listo en :${PORT}`));
