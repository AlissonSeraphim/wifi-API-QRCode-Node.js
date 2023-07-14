const express = require('express');
const cors = require('cors');
const { toDataURL } = require('qrcode');

const app = express();

app.use(express.json());
app.use(cors());

// Possivel JSON ou em SQL ('meu banco de dados / model'):
const wifiCredentials = {
  username: '',
  password: '',
};

// Função que gera o qrCode:
async function generateQRCode(username, password) {
  console.log('meu username foi', username);
  console.log('minha senha foi', password);
  const wifiString = `WIFI:T:WPA;S:${username};P:${password};;`;
  const qrCode = await toDataURL(wifiString);
  return qrCode;
}

// Controllers
app.get('/', (_req, res) => res.status(200).json({ 
  message: 'Bem vindo a API de QRCode, visite o /wifi!',
}));

app.get('/wifi', async (_req, res) => {
  const { username, password } = wifiCredentials;

  const qrCode = await generateQRCode(username, password);

  res.status(200).json({ qrCode });
});

app.post('/wifi', async (req, res) => {
  const { username, password } = req.body;
  wifiCredentials.username = username;
  wifiCredentials.password = password;

  const qrCode = await generateQRCode(username, password);

  res.status(201).json({ qrCode });
});

// app.listen(3001, () => console.log('server running on port 3001'));

module.exports = app;