const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ensureAuth } = require('../middleware/auth');

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

const discordAPI = axios.create({
  baseURL: 'https://discord.com/api/v10',
  headers: { Authorization: `Bot ${BOT_TOKEN}` }
});

// Current user info
router.get('/me', ensureAuth, (req, res) => {
  const { id, username, discriminator, avatar, email, isAdmin, stats, recentActivity } = req.user;
  res.json({ id, username, discriminator, avatar, email, isAdmin, stats, recentActivity });
});

// Guild member count / online count
router.get('/guild/info', async (req, res) => {
  try {
    const guild = await discordAPI.get(`/guilds/${GUILD_ID}?with_counts=true`);

    let onlineCount = 0;
    try {
      const widget = await discordAPI.get(`/guilds/${GUILD_ID}/widget.json`);
      onlineCount = widget.data.presence_count || 0;
    } catch {
      onlineCount = 0;
    }

    res.json({
      name: guild.data.name,
      memberCount: guild.data.approximate_member_count,
      onlineCount: guild.data.approximate_presence_count || onlineCount,
      icon: guild.data.icon
        ? `https://cdn.discordapp.com/icons/${GUILD_ID}/${guild.data.icon}.png`
        : null
    });
  } catch (err) {
    console.error('Guild info error:', err.message);
    res.json({ name: 'GIANNI Server', memberCount: 0, onlineCount: 0, icon: null });
  }
});

// Leaderboard (mock data - replace with DB)
router.get('/leaderboard', ensureAuth, (req, res) => {
  const leaderboard = [
    { rank: 1, username: 'TopPlayer', avatar: null, xp: 5000, level: 30, trend: 'up' },
    { rank: 2, username: 'GamingPro', avatar: null, xp: 4200, level: 27, trend: 'up' },
    { rank: 3, username: 'MusicMaster', avatar: null, xp: 3800, level: 24, trend: 'down' },
    { rank: 4, username: 'DiscordKing', avatar: null, xp: 3620, level: 22, trend: 'up' },
    { rank: 5, username: 'BotWhisperer', avatar: null, xp: 3400, level: 21, trend: 'up' },
    { rank: 6, username: 'NightOwl', avatar: null, xp: 3100, level: 20, trend: 'down' },
    { rank: 7, username: 'GameHunter', avatar: null, xp: 2900, level: 19, trend: 'up' },
    { rank: 8, username: 'UNOChamp', avatar: null, xp: 2750, level: 18, trend: 'up' },
    { rank: 9, username: 'AmongUsFan', avatar: null, xp: 2600, level: 17, trend: 'down' },
    { rank: 10, username: 'ServerAdmin', avatar: null, xp: 2400, level: 16, trend: 'up' }
  ];
  res.json(leaderboard);
});

// Server list (mock data - replace with DB)
router.get('/servers', ensureAuth, (req, res) => {
  const servers = [
    { id: '1', name: 'Gaming Community Alpha', members: 1247, rating: 4.5, category: 'Gaming', active: true, description: 'Premier gaming community with daily events and tournaments.' },
    { id: '2', name: 'Music Lovers Hub', members: 892, rating: 4.2, category: 'Music', active: true, description: 'Share and discover music with fellow enthusiasts.' },
    { id: '3', name: 'Chill & Chat', members: 2103, rating: 3.8, category: 'Community', active: true, description: 'Relaxed community for casual conversation and fun.' },
    { id: '4', name: 'UNO Masters', members: 456, rating: 4.7, category: 'Gaming', active: true, description: 'Competitive UNO players only. Weekly championship.' },
    { id: '5', name: 'Lo-Fi Beats', members: 1567, rating: 4.4, category: 'Music', active: true, description: '24/7 lo-fi music and study sessions.' },
    { id: '6', name: 'Among Us Arena', members: 789, rating: 3.9, category: 'Gaming', active: false, description: 'Among Us games every night. Impostors welcome.' }
  ];

  const { category, sort } = req.query;
  let filtered = [...servers];

  if (category && category !== 'All') {
    filtered = filtered.filter(s => s.category === category);
  }

  if (sort === 'Top Rated') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'Newest') {
    filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  } else {
    filtered.sort((a, b) => b.members - a.members);
  }

  res.json(filtered);
});

module.exports = router;
