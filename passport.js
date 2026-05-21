const DiscordStrategy = require('passport-discord').Strategy;

const ADMIN_IDS = (process.env.ADMIN_IDS || '').split(',').map(id => id.trim()).filter(Boolean);

const users = new Map();

module.exports = (passport) => {
  passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/auth/discord/callback`,
    scope: ['identify', 'email', 'guilds']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = {
        id: profile.id,
        username: profile.username,
        discriminator: profile.discriminator,
        avatar: profile.avatar
          ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${parseInt(profile.discriminator || 0) % 5}.png`,
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

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = users.get(id);
    if (user) {
      return done(null, user);
    }
    done(new Error('User not found'), null);
  });
};