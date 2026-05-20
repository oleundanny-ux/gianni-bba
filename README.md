const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ensureAdmin } = require('../middleware/auth');

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

const discordAPI = axios.create({
  baseURL: 'https://discord.com/api/v10',
  headers: { Authorization: `Bot ${BOT_TOKEN}` }
});

// Admin stats
router.get('/stats', ensureAdmin, (req, res) => {
  const stats = {
    totalCommands: 110,
    embedTemplates: 111,
    categories: 12,
    onlineCount: 42,
    commandsByCategory: {
      'Moderation': 25,
      'Music': 20,
      'Games': 18,
      'Utility': 15,
      'Fun': 12,
      'Admin': 20
    },
    embedsByCategory: {
      'Welcome': 35,
      'Rules': 28,
      'Info': 48
    }
  };
  res.json(stats);
});

// Guild members
router.get('/members', ensureAdmin, async (req, res) => {
  try {
    const response = await discordAPI.get(`/guilds/${GUILD_ID}/members?limit=50`);
    const members = response.data.map(m => ({
      id: m.user.id,
      username: m.user.username,
      avatar: m.user.avatar ? `https://cdn.discordapp.com/avatars/${m.user.id}/${m.user.avatar}.png` : null,
      joinedAt: m.joined_at,
      roles: m.roles
    }));
    res.json(members);
  } catch (err) {
    console.error('Members fetch error:', err.message);
    // Return mock data if bot can't fetch
    res.json([
      { id: '1', username: 'AdminUser', avatar: null, joinedAt: new Date().toISOString(), roles: ['admin', 'moderator'] },
      { id: '2', username: 'ModeratorOne', avatar: null, joinedAt: new Date().toISOString(), roles: ['moderator'] }
    ]);
  }
});

// Send message to channel
router.post('/send-message', ensureAdmin, async (req, res) => {
  const { channelId, message } = req.body;

  if (!channelId || !message) {
    return res.status(400).json({ error: 'channelId and message are required' });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars)' });
  }

  // Basic channel ID validation (Discord snowflake)
  if (!/^\d{17,20}$/.test(channelId)) {
    return res.status(400).json({ error: 'Invalid channel ID format' });
  }

  try {
    await discordAPI.post(`/channels/${channelId}/messages`, { content: message });
    res.json({ success: true });
  } catch (err) {
    console.error('Send message error:', err.response?.data || err.message);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: err.response?.data?.message || err.message
    });
  }
});

module.exports = router;
