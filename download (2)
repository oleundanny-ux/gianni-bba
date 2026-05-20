<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .welcome-banner {
      background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(91,33,182,0.1));
      border: 1px solid rgba(124,58,237,0.3);
      border-radius: 16px;
      padding: 1.5rem 2rem;
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      font-weight: 700;
    }
    .welcome-banner span { color: var(--primary-light); }
    .profile-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .profile-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid var(--primary);
      object-fit: cover;
    }
    .profile-avatar-placeholder {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 900;
      color: white;
      border: 3px solid var(--primary);
    }
    .admin-panel-btn {
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      border: none;
      border-radius: 12px;
      padding: 1.5rem;
      color: white;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 0 30px var(--primary-glow);
      transition: all 0.3s;
    }
    .admin-panel-btn:hover { transform: translateY(-3px); box-shadow: 0 0 50px var(--primary-glow); }
    .admin-panel-btn h3 { font-size: 1.1rem; font-weight: 800; }
    .admin-panel-btn p { font-size: 0.8rem; opacity: 0.8; margin-top: 0.2rem; }
    .level-bar-section { margin-top: 1.5rem; }
    .level-label { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem; }
    .main-content { padding: 2rem; flex: 1; }
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
    <div style="display:flex;">
      <aside class="sidebar">
        <ul class="sidebar-nav">
          <li><a href="/dashboard" class="active">👤 Profile</a></li>
          <li><a href="/dashboard">📊 My Stats</a></li>
          <li><a href="/games">🎮 Games</a></li>
          <li><a href="/music">🎵 Music</a></li>
          <li><a href="/servers">🌐 Servers</a></li>
        </ul>
      </aside>

      <div class="main-content">
        <div id="loading" style="text-align:center;padding:4rem;"><div class="spinner" style="margin:0 auto;"></div></div>
        <div id="dashboard-content" style="display:none;">

          <div class="welcome-banner">
            Welcome back, <span id="welcome-name">...</span>!
          </div>

          <div style="display:grid;grid-template-columns:1fr 280px;gap:1.5rem;">
            <div>
              <div class="card" style="margin-bottom:1.5rem;">
                <div class="profile-row">
                  <div id="profile-avatar-wrap"></div>
                  <div>
                    <div style="font-size:1rem;font-weight:700;" id="profile-username"></div>
                    <div style="font-size:0.875rem;color:var(--text-muted);" id="profile-tag"></div>
                    <div style="display:flex;align-items:center;gap:0.4rem;margin-top:0.3rem;">
                      <span class="status-dot status-online"></span>
                      <span style="font-size:0.8rem;color:var(--success);">Online</span>
                    </div>
                  </div>
                </div>

                <div style="font-weight:700;margin-bottom:1rem;font-size:0.95rem;">Profile Stats</div>
                <div class="grid-2" id="stats-grid"></div>

                <div class="level-bar-section">
                  <div class="level-label">
                    <span>Level <strong id="user-level">1</strong></span>
                    <span id="xp-label" style="color:var(--text-muted);"></span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" id="level-progress" style="width:0%"></div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div style="font-weight:700;margin-bottom:1rem;font-size:0.95rem;">Recent Activity</div>
                <div id="activity-list">
                  <div style="color:var(--text-muted);font-size:0.875rem;text-align:center;padding:1rem;">No recent activity</div>
                </div>
              </div>
            </div>

            <div id="admin-section" style="display:none;">
              <div style="font-weight:600;font-size:0.8rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.75rem;">Bot Administration</div>
              <a href="/bot-panel" class="admin-panel-btn">
                <div style="font-size:2rem;">⚙️</div>
                <div>
                  <h3>Access Bot Panel</h3>
                  <p>Visible only to admin users</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    const ACTIVITY_ICONS = { game: '🎮', music: '🎵', server: '🌐', default: '⭐' };

    async function loadDashboard() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }

      document.getElementById('welcome-name').textContent = user.username;
      document.getElementById('profile-username').textContent = user.username;
      document.getElementById('profile-tag').textContent = user.discriminator !== '0' ? `${user.username}#${user.discriminator}` : `@${user.username}`;

      const wrap = document.getElementById('profile-avatar-wrap');
      if (user.avatar) {
        const img = document.createElement('img');
        img.src = user.avatar;
        img.className = 'profile-avatar';
        img.alt = user.username;
        wrap.appendChild(img);
      } else {
        const div = document.createElement('div');
        div.className = 'profile-avatar-placeholder';
        div.textContent = user.username.charAt(0).toUpperCase();
        wrap.appendChild(div);
      }

      const stats = user.stats;
      const grid = document.getElementById('stats-grid');
      grid.innerHTML = `
        <div class="stat-card"><div class="stat-value">${stats.gamesPlayed}</div><div class="stat-label">Games Played</div></div>
        <div class="stat-card"><div class="stat-value">${stats.musicHours}h</div><div class="stat-label">Music Hours</div></div>
        <div class="stat-card"><div class="stat-value">${formatNumber(stats.xpPoints)}</div><div class="stat-label">XP Points</div></div>
        <div class="stat-card"><div class="stat-value">${stats.serversAdded}</div><div class="stat-label">Servers Added</div></div>
      `;

      document.getElementById('user-level').textContent = stats.level;
      document.getElementById('xp-label').textContent = `${formatNumber(stats.xpPoints)} XP`;
      setTimeout(() => {
        document.getElementById('level-progress').style.width = `${stats.xpProgress || 65}%`;
      }, 100);

      const activityList = document.getElementById('activity-list');
      if (user.recentActivity && user.recentActivity.length > 0) {
        activityList.innerHTML = user.recentActivity.map(a => `
          <div class="activity-item">
            <span>${ACTIVITY_ICONS[a.type] || ACTIVITY_ICONS.default}</span>
            <span style="flex:1;font-size:0.875rem;">${escapeHtml(a.text)}</span>
            <span style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(a.time)}</span>
          </div>
        `).join('');
      } else {
        activityList.innerHTML = `
          <div class="activity-item"><span class="activity-dot"></span><span style="flex:1;font-size:0.875rem;">Joined 'CyberVerse' server</span><span style="font-size:0.75rem;color:var(--primary-light);">2h ago</span></div>
          <div class="activity-item"><span class="activity-dot"></span><span style="flex:1;font-size:0.875rem;">Upgraded bot permissions</span><span style="font-size:0.75rem;color:var(--primary-light);">1d ago</span></div>
          <div class="activity-item"><span class="activity-dot"></span><span style="flex:1;font-size:0.875rem;">Updated profile banner</span><span style="font-size:0.75rem;color:var(--primary-light);">3d ago</span></div>
        `;
      }

      if (user.isAdmin) {
        document.getElementById('admin-section').style.display = 'block';
      }

      document.getElementById('loading').style.display = 'none';
      document.getElementById('dashboard-content').style.display = 'block';
    }

    loadDashboard();
  </script>
</body>
</html>