<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leaderboards — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .lb-header {
      text-align: center;
      padding: 2rem 0;
    }
    .lb-header h1 {
      font-size: 2rem;
      font-weight: 900;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .lb-header p { color: var(--text-muted); margin-top: 0.5rem; }
    .lb-list {
      max-width: 700px;
      margin: 0 auto;
    }
    .lb-user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.875rem;
      flex-shrink: 0;
    }
    .lb-user-info { flex: 1; }
    .lb-username { font-weight: 600; font-size: 0.9rem; }
    .lb-level { font-size: 0.75rem; color: var(--text-muted); }
    .lb-xp { text-align: right; }
    .lb-xp-value { font-weight: 700; color: var(--primary-light); }
    .lb-tabs {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .lb-tab {
      padding: 0.5rem 1.25rem;
      border-radius: 8px;
      background: var(--bg-card2);
      border: 1px solid var(--border-light);
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s;
    }
    .lb-tab:hover { color: var(--text); }
    .lb-tab.active {
      background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(91,33,182,0.1));
      color: var(--primary-light);
      border-color: rgba(124,58,237,0.3);
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
      <li id="nav-botpanel" style="display:none;"><a href="/bot-panel" class="btn-bot-panel">Bot Panel</a></li>
    </ul>
    <div class="navbar-user" id="navbar-user">
      <div class="spinner" style="width:24px;height:24px;border-width:2px;"></div>
    </div>
  </nav>

  <div class="page">
    <div class="container section">
      <div class="lb-header">
        <h1>🏆 Leaderboards</h1>
        <p>Top players ranked by XP and activity</p>
      </div>

      <div class="lb-tabs">
        <button class="lb-tab active" onclick="setTab('xp', this)">⭐ XP</button>
        <button class="lb-tab" onclick="setTab('games', this)">🎮 Games</button>
        <button class="lb-tab" onclick="setTab('music', this)">🎵 Music</button>
      </div>

      <div class="lb-list" id="lb-list">
        <div style="text-align:center;padding:3rem;"><div class="spinner" style="margin:0 auto;"></div></div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    let currentTab = 'xp';

    function setTab(tab, el) {
      currentTab = tab;
      document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      loadLeaderboard();
    }

    function getRankClass(rank) {
      if (rank === 1) return 'gold';
      if (rank === 2) return 'silver';
      if (rank === 3) return 'bronze';
      return '';
    }

    async function loadLeaderboard() {
      const list = document.getElementById('lb-list');
      list.innerHTML = '<div style="text-align:center;padding:3rem;"><div class="spinner" style="margin:0 auto;"></div></div>';

      try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();

        list.innerHTML = '';
        data.forEach(entry => {
          const item = document.createElement('div');
          item.className = 'lb-item';
          item.innerHTML = `
            <div class="lb-rank ${getRankClass(entry.rank)}">#${entry.rank}</div>
            <div class="lb-user-avatar">${entry.username.charAt(0).toUpperCase()}</div>
            <div class="lb-user-info">
              <div class="lb-username">${escapeHtml(entry.username)}</div>
              <div class="lb-level">Level ${entry.level}</div>
            </div>
            <div class="lb-xp">
              <div class="lb-xp-value">${formatNumber(entry.xp)} XP</div>
              <div style="font-size:0.75rem;color:var(--text-muted);">${entry.trend === 'up' ? '▲' : '▼'} Trending</div>
            </div>
          `;
          list.appendChild(item);
        });
      } catch {
        list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem;">Failed to load leaderboard.</p>';
      }
    }

    async function init() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }
      loadLeaderboard();
    }
    init();
  </script>
</body>
</html>