const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  if (req.xhr || req.headers.accept?.includes('application/json')) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  res.redirect('/login');
};

const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user && req.user.isAdmin) return next();
  if (req.xhr || req.headers.accept?.includes('application/json')) {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }
  if (req.isAuthenticated()) return res.status(403).send('Access denied');
  res.redirect('/login');
};

const ensureGuest = (req, res, next) => {
  if (!req.isAuthenticated()) return next();
  res.redirect('/dashboard');
};

module.exports = { ensureAuth, ensureAdmin, ensureGuest };
