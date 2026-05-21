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
  try {
    const user = {
      id: profile.id,
      username: profile.username,
      discriminator: profile.discriminator,
      avatar: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : null,
      email: profile.email,
      guilds: profile.guilds || [],
      isAdmin: ADMIN_IDS.includes(profile.id),
      stats: {
        gamesPlayed: Math.floor(Math.random() * 50),
        musicHours: Math.floor(Math.random() * 100),
        xpPoints: Math.floor(Math.random() * 5000),
        serversAdded: Math.floor(Math.random() * 10),
        level: Math.floor(Math.random() * 20) + 1,
        xpProgress: Math.floor(Math.random() * 100)
      },
      recentActivity: []
    };
    users.set(profile.id, user);
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = users.get(id);
  if (user) return done(null, user);
  done(null, false);
});

const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user && req.user.isAdmin) return next();
  res.status(403).send('Access denied');
};

const ensureGuest = (req, res, next) => {
  if (!req.isAuthenticated()) return next();
  res.redirect('/dashboard');
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'change-me-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

const publicPath = path.join(__dirname, 'public');
app.use('/css', express.static(path.join(publicPath, 'css')));
app.use('/js', express.static(path.join(publicPath, 'js')));
app.use('/images', express.static(path.join(publicPath, 'images')));

const sendPage = (res, name) => {
  const filePath = path.join(publicPath, 'pages', name + '.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Page error:', err.message);
      res.status(500).json({ error: 'Page not found: ' + name });
    }
  });
};

app.get('/', (req, res) => sendPage(res, 'index'));
app.get('/login', ensureGuest, (req, res) => sendPage(res, 'login'));
app.get('/dashboard', ensureAuth, (req, res) => sendPage(res, 'dashboard'));
app.get('/games', ensureAuth, (req, res) => sendPage(res, 'games'));
app.get('/music', ensureAuth, (req, res) => sendPage(res, 'music'));
app.get('/servers', ensureAuth, (req, res) => sendPage(res, 'servers'));
app.get('/leaderboards', ensureAuth, (req, res) => sendPage(res, 'leaderboards'));
app.get('/bot-panel', ensureAdmin, (req, res) => sendPage(res, 'bot-panel'));

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/login?error=1' }), (req, res) => res.redirect('/dashboard'));
app.get('/auth/logout', (req, res) => { req.logout(() => res.redirect('/')); });

app.get('/api/me', ensureAuth, (req, res) => {
  const { id, username, avatar, email, isAdmin, stats } = req.user;
  res.json({ id, username, avatar, email, isAdmin, stats });
});

app.get('/api/guild/info', (req, res) => res.json({ name: 'GIANNI Server', memberCount: 1247, onlineCount: 42, icon: null }));

app.get('/api/leaderboard', ensureAuth, (req, res) => res.json([
  { rank: 1, username: 'TopPlayer', xp: 5000, level: 30, trend: 'up' },
  { rank: 2, username: 'GamingPro', xp: 4200, level: 27, trend: 'up' },
  { rank: 3, username: 'MusicMaster', xp: 3800, level: 24, trend: 'down' },
  { rank: 4, username: 'DiscordKing', xp: 3620, level: 22, trend: 'up' },
  { rank: 5, username: 'BotWhisperer', xp: 3400, level: 21, trend: 'up' },
  { rank: 6, username: 'NightOwl', xp: 3100, level: 20, trend: 'down' },
  { rank: 7, username: 'GameHunter', xp: 2900, level: 19, trend: 'up' },
  { rank: 8, username: 'UNOChamp', xp: 2750, level: 18, trend: 'up' },
  { rank: 9, username: 'AmongUsFan', xp: 2600, level: 17, trend: 'down' },
  { rank: 10, username: 'ServerAdmin', xp: 2400, level: 16, trend: 'up' }
]));

app.get('/api/servers', ensureAuth, (req, res) => {
  let servers = [
    { id: '1', name: 'Gaming Community Alpha', members: 1247, rating: 4.5, category: 'Gaming', active: true, description: 'Premier gaming community with daily events and tournaments.' },
    { id: '2', name: 'Music Lovers Hub', members: 892, rating: 4.2, category: 'Music', active: true, description: 'Share and discover music with fellow enthusiasts.' },
    { id: '3', name: 'Chill & Chat', members: 2103, rating: 3.8, category: 'Community', active: true, description: 'Relaxed community for casual conversation and fun.' },
    { id: '4', name: 'UNO Masters', members: 456, rating: 4.7, category: 'Gaming', active: true, description: 'Competitive UNO players only. Weekly championship.' },
    { id: '5', name: 'Lo-Fi Beats', members: 1567, rating: 4.4, category: 'Music', active: true, description: '24/7 lo-fi music and study sessions.' },
    { id: '6', name: 'Among Us Arena', members: 789, rating: 3.9, category: 'Gaming', active: false, description: 'Among Us games every night. Impostors welcome.' }
  ];
  const { category, sort } = req.query;
  if (category && category !== 'All') servers = servers.filter(s => s.category === category);
  if (sort === 'Top Rated') servers.sort((a, b) => b.rating - a.rating);
  else if (sort === 'Newest') servers.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  else servers.sort((a, b) => b.members - a.members);
  res.json(servers);
});

app.get('/admin/stats', ensureAdmin, (req, res) => res.json({ totalCommands: 110, embedTemplates: 111, categories: 12, onlineCount: 42 }));
app.get('/admin/members', ensureAdmin, (req, res) => res.json([
  { id: '1', username: 'AdminUser', avatar: null, joinedAt: new Date().toISOString(), roles: ['admin', 'moderator'] },
  { id: '2', username: 'ModeratorOne', avatar: null, joinedAt: new Date().toISOString(), roles: ['moderator'] }
]));
app.post('/admin/send-message', ensureAdmin, (req, res) => {
  const { channelId, message } = req.body;
  if (!channelId || !message) return res.status(400).json({ error: 'channelId and message required' });
  res.json({ success: true });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use((req, res) => sendPage(res, '404'));

app.listen(PORT, '0.0.0.0', () => console.log(`GIANNI Portal running on port ${PORT}`));
