<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GIANNI Portal</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s;
    }
    .feature-card:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
    }
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .feature-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .feature-card p { color: var(--text-muted); font-size: 0.875rem; }
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .widget-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 16px;
      padding: 1.5rem;
      max-width: 420px;
      margin: 3rem auto 0;
    }
    .widget-server {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .server-icon {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.25rem;
    }
    .channel-list {
      list-style: none;
      margin: 0.75rem 0 1.25rem;
      padding-left: 0.25rem;
    }
    .channel-list li {
      padding: 0.4rem 0;
      font-size: 0.875rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .channel-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--blue); }
    .channel-voice { color: var(--primary-light); }
    @media (max-width: 768px) {
      .features-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="/" class="navbar-brand">GIANNI</a>
    <ul class="navbar-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/music">Music</a></li>
      <li><a href="/servers">Servers</a></li>
      <li><a href="/leaderboards">Leaderboards</a></li>
    </ul>
    <div class="navbar-user" id="navbar-user">
      <a href="/login" class="btn btn-primary btn-sm">Login</a>
    </div>
  </nav>

  <div class="page">
    <div class="hero">
      <h1>GIANNI</h1>
      <p>The ultimate Discord bot portal. Play games, stream music, manage your servers — all in one place.</p>
      <div class="hero-buttons">
        <a href="/auth/discord" class="btn btn-discord">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.081.114 18.104.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
          Continue with Discord
        </a>
        <a href="/login" class="btn btn-outline">Login with Email</a>
      </div>

      <div class="widget-card">
        <div class="widget-server">
          <div class="server-icon">G</div>
          <div>
            <div style="font-weight:700;font-size:1rem;">GIANNI Server</div>
            <div style="color:var(--success);font-size:0.875rem;"><span data-guild-online>...</span> Online</div>
          </div>
        </div>
        <ul class="channel-list">
          <li><span class="channel-dot"></span> #welcome</li>
          <li><span class="channel-dot"></span> #general-chat</li>
          <li><span class="channel-dot"></span> #gaming</li>
          <li><span style="font-size:1rem;" class="channel-voice">🔊</span> <em>Music</em></li>
        </ul>
        <div class="divider"></div>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
          <a href="https://discord.gg/your-invite" target="_blank" class="btn btn-discord" style="flex:1;justify-content:center;">
            Join Discord Server
          </a>
          <a href="/login" class="btn btn-outline" style="flex:1;justify-content:center;">Login to Panel</a>
        </div>
      </div>
    </div>

    <div class="container section">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎵</div>
          <h3>Music Bot</h3>
          <p>High-quality music streaming, playlists, and advanced audio controls for your server.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Moderation</h3>
          <p>Powerful tools to keep your community safe, clean, and friendly around the clock.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>Games</h3>
          <p>Play Among Us, UNO, and more directly through Discord with your friends.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏆</div>
          <h3>Leaderboards</h3>
          <p>Track XP, game stats, and music hours with competitive global rankings.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>Server Browser</h3>
          <p>Discover and join new Discord communities filtered by category and activity.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚙️</div>
          <h3>Bot Panel</h3>
          <p>Full admin dashboard to manage commands, embeds, members, and permissions.</p>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>initUser();</script>
</body>
</html>