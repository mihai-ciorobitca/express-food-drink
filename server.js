const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servește toate fișierele statice din "public"
app.use(express.static(path.join(__dirname, 'public')));

// Fallback simplu pentru SPA (dacă folosești React)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
