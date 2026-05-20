const DiscordStrategy = require('passport-discord').Strategy;

const ADMIN_IDS = (process.env.ADMIN_IDS || '').split(',').map(id => id.trim()).filter(Boolean);

// In-memory user store (replace with DB in production)
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
          gamesPlayed: 0,
          musicHours: 0,
          xpPoints: 0,
          serversAdded: 0,
          level: 1,
          xpProgress: 0
        },
        recentActivity: []
      };

      // Store in memory (replace with DB)
      users.set(profile.id, user);

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));

  // FIX: Serialize only the user ID, not the entire object
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // FIX: Deserialize by fetching from store
  passport.deserializeUser((id, done) => {
    const user = users.get(id);
    if (user) {
      return done(null, user);
    }
    done(new Error('User not found'), null);
  });
};
