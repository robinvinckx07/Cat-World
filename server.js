// Stap 1: Express inladen
const express = require('express');
const app     = express();
const PORT    = 3000;



// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});


// Statische bestanden (uit workshop 2)
app.use(express.static('public'));

// EJS instellen als template-engine
app.set('view engine', 'ejs');

// Routes komen hierna...

// Homepagina
app.get('/', (req, res) => {
  res.render('index');   // laadt views/index.ejs
});

// Facts
app.get('/Facts', (req, res) => {
  res.render('Facts'); // laadt views/facts.ejs
});

// opties
app.get('/Opties', (req, res) => {
  res.render('Opties'); // laadt views/opties.ejs
});

