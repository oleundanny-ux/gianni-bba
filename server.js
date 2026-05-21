const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'dashboard.html')));
app.get('/games', (req, res) => res.sendFile(path.join(__dirname, 'games.html')));
app.get('/music', (req, res) => res.sendFile(path.join(__dirname, 'music.html')));
app.get('/servers', (req, res) => res.sendFile(path.join(__dirname, 'servers.html')));
app.get('/leaderboards', (req, res) => res.sendFile(path.join(__dirname, 'leaderboards.html')));
app.get('/bot-panel', (req, res) => res.sendFile(path.join(__dirname, 'bot-panel.html')));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use((req, res) => res.sendFile(path.join(__dirname, '404.html')));

app.listen(PORT, '0.0.0.0', () => console.log('GIANNI running on port ' + PORT));
