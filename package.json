const express = require('express');
const router = express.Router();
const path = require('path');
const { ensureAuth, ensureAdmin, ensureGuest } = require('../middleware/auth');

const page = (name) => path.join(__dirname, '..', 'public', 'pages', `${name}.html`);

router.get('/', (req, res) => res.sendFile(page('index')));
router.get('/login', ensureGuest, (req, res) => res.sendFile(page('login')));
router.get('/dashboard', ensureAuth, (req, res) => res.sendFile(page('dashboard')));
router.get('/games', ensureAuth, (req, res) => res.sendFile(page('games')));
router.get('/music', ensureAuth, (req, res) => res.sendFile(page('music')));
router.get('/servers', ensureAuth, (req, res) => res.sendFile(page('servers')));
router.get('/leaderboards', ensureAuth, (req, res) => res.sendFile(page('leaderboards')));
router.get('/bot-panel', ensureAdmin, (req, res) => res.sendFile(page('bot-panel')));

module.exports = router;
