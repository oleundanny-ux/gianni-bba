<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Games — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .gaming-zone-title {
      font-size: 2.5rem;
      font-weight: 900;
      text-align: center;
      padding: 3rem 0 2rem;
      text-shadow: 0 0 30px rgba(255,255,255,0.1);
    }
    .games-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .game-card {
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }
    .game-card:hover { transform: translateY(-6px); }
    .game-card-among {
      background: #1a0505;
      border: 2px solid #ef4444;
      box-shadow: 0 0 20px rgba(239,68,68,0.3);
    }
    .game-card-among:hover { box-shadow: 0 0 40px rgba(239,68,68,0.5); }
    .game-card-uno {
      background: #0a1a2a;
      border: 2px solid #3b82f6;
      box-shadow: 0 0 20px rgba(59,130,246,0.3);
    }
    .game-card-uno:hover { box-shadow: 0 0 40px rgba(59,130,246,0.5); }
    .game-card-music {
      background: #0a1a0a;
      border: 2px solid #10b981;
      box-shadow: 0 0 20px rgba(16,185,129,0.3);
    }
    .game-card-music:hover { box-shadow: 0 0 40px rgba(16,185,129,0.5); }
    .game-inner {
      padding: 2.5rem 1.5rem;
      text-align: center;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .game-emoji { font-size: 5rem; margin-bottom: 0.5rem; }
    .game-name { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .game-desc { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.25rem; }
    .game-btn {
      padding: 0.65rem 2rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
      text-decoration: none;
      display: inline-block;
    }
    .btn-among { background: #ef4444; color: white; }
    .btn-among:hover { background: #dc2626; }
    .btn-uno { background: #3b82f6; color: white; }
    .btn-uno:hover { background: #2563eb; }
    .btn-music-game { background: #10b981; color: white; }
    .btn-music-game:hover { background: #059669; }
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      max-width: 900px;
      margin: 3rem auto 0;
    }
    @media (max-width: 768px) {
      .games-grid { grid-template-columns: 1fr; }
      .stats-row { grid-template-columns: repeat(2, 1fr); }
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
    <div class="container">
      <div class="gaming-zone-title">🎮 Gaming Zone</div>

      <div class="games-grid">
        <div class="game-card game-card-among">
          <div class="game-inner">
            <div>
              <div class="game-emoji">🔴</div>
              <div class="game-name">Among Us</div>
              <div class="game-desc">Find the impostor. Play with friends right inside Discord!</div>
            </div>
            <button class="game-btn btn-among" onclick="launchGame('among-us')">Launch Game</button>
          </div>
        </div>

        <div class="game-card game-card-uno">
          <div class="game-inner">
            <div>
              <div class="game-emoji">🃏</div>
              <div class="game-name">UNO</div>
              <div class="game-desc">Classic card game. Up to 10 players per session.</div>
            </div>
            <button class="game-btn btn-uno" onclick="launchGame('uno')">Play UNO</button>
          </div>
        </div>

        <div class="game-card game-card-music">
          <div class="game-inner">
            <div>
              <div style="font-size:5rem;">💿</div>
              <div class="game-name">Music Player</div>
              <div class="game-desc">Stream music in your Discord voice channel.</div>
            </div>
            <a href="/music" class="game-btn btn-music-game">Open Player</a>
          </div>
        </div>
      </div>

      <div class="stats-row" id="game-stats">
        <div class="stat-card">
          <div class="stat-value" id="games-played">-</div>
          <div class="stat-label">Your Games</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">🏆</div>
          <div class="stat-label">Achievements</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="user-xp">-</div>
          <div class="stat-label">XP Points</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="user-level-g">-</div>
          <div class="stat-label">Level</div>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    function launchGame(game) {
      const names = { 'among-us': 'Among Us', 'uno': 'UNO' };
      showToast(`Launching ${names[game]}... Connect to a Discord voice channel first!`, 'info');
    }

    async function init() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }
      document.getElementById('games-played').textContent = user.stats.gamesPlayed;
      document.getElementById('user-xp').textContent = formatNumber(user.stats.xpPoints);
      document.getElementById('user-level-g').textContent = `Lv.${user.stats.level}`;
    }
    init();
  </script>
</body>
</html>