cat > /app/server.js << 'EOF'
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const path = require('path');
require('dotenv').config();

const ADMIN_IDS = (process.env.ADMIN_IDS || '').split(',').map(id => id.trim()).filter(Boolean);
const users = new Map();

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: (process.env.BASE_URL || 'http://localhost:3000') + '/auth/discord/callback',
  scope: ['identify', 'email', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
  const user = {
    id: profile.id,
    username: profile.username,
    discriminator: profile.discriminator,
    avatar: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : null,
    email: profile.email,
    guilds: profile.guilds || [],
    isAdmin: ADMIN_IDS.includes(profile.id),
    stats: { gamesPlayed: 0, musicHours: 0, xpPoints: 0, serversAdded: 0, level: 1, xpProgress: 0 },
    recentActivity: []
  };
  users.set(profile.id, user);
  done(null, user);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, users.get(id) || false));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

// STATIC FILES - iz root foldera
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// PAGES
const sendPage = (res, name) => {
  const filePath = path.join(__dirname, name + '.html');
  res.sendFile(filePath, err => {
    if (err) res.status(500).send('Page error: ' + name);
  });
};

app.get('/', (req, res) => sendPage(res, 'index'));
app.get('/login', (req, res) => sendPage(res, 'login'));
app.get('/dashboard', (req, res) => sendPage(res, 'dashboard'));
app.get('/games', (req, res) => sendPage(res, 'games'));
app.get('/music', (req, res) => sendPage(res, 'music'));
app.get('/servers', (req, res) => sendPage(res, 'servers'));
app.get('/leaderboards', (req, res) => sendPage(res, 'leaderboards'));
app.get('/bot-panel', (req, res) => sendPage(res, 'bot-panel'));

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/login' }), (req, res) => res.redirect('/dashboard'));
app.get('/auth/logout', (req, res) => { req.logout(() => res.redirect('/')); });

app.get('/api/me', (req, res) => req.user ? res.json(req.user) : res.status(401).json({ error: 'Not logged in' }));
app.get('/api/guild/info', (req, res) => res.json({ name: 'GIANNI Server', memberCount: 1247, onlineCount: 42 }));
app.get('/api/leaderboard', (req, res) => res.json([{ rank: 1, username: 'TopPlayer', xp: 5000, level: 30 }]));
app.get('/api/servers', (req, res) => res.json([
  { id: '1', name: 'Gaming Community', members: 1247, rating: 4.5, category: 'Gaming', active: true, description: 'Premier gaming community.' }
]));

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use((req, res) => sendPage(res, '404'));

app.listen(PORT, '0.0.0.0', () => console.log(`GIANNI running on port ${PORT}`));
EOF
