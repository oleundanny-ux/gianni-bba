const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (needed for Railway/Render behind reverse proxy)
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
app.use(limiter);

// Stricter rate limit for admin endpoints
const adminLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 30,
  message: { error: 'Too many admin requests.' }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'change-me-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  name: 'gianni.sid'
}));

app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/', require('./routes/pages'));
app.use('/api', require('./routes/api'));
app.use('/admin', adminLimiter, require('./routes/admin'));
app.use('/auth', require('./routes/auth'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/pages', '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`GIANNI Portal running on port ${PORT}`);
});