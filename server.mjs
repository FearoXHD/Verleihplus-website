import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mail-Konfiguration
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.de',
  port: 587,
  secure: false,
  auth: {
    user: 'info@verleihplus.de',
    pass: '8daA1CBm8gkicI'
  }
});

// API-Endpunkt
app.post('/send', (req, res) => {
  console.log('Received body:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Alle Felder sind erforderlich.' });
  }

  const mailOptions = {
    from: 'info@verleihplus.de',
    to: 'info@verleihplus.de', // an dich selbst
    subject: 'Neue Kontaktanfrage von VerleihPlus',
    html: `
      <h3>Neue Nachricht über das Kontaktformular</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong><br>${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'E-Mail konnte nicht gesendet werden.' });
    }
    res.status(200).json({ success: true, message: 'E-Mail erfolgreich gesendet!' });
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`API läuft auf http://localhost:${PORT}`);
});
