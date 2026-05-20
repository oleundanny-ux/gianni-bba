<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Servers — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .servers-layout { display:grid; grid-template-columns: 200px 1fr; gap:2rem; }
    .servers-sidebar { padding-top: 1rem; }
    .filter-group { margin-bottom: 1.5rem; }
    .filter-title { font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.75rem; }
    .filter-btn {
      display:block;
      width:100%;
      padding:0.5rem 0.75rem;
      background:none;
      border:none;
      color:var(--text-muted);
      text-align:left;
      cursor:pointer;
      border-radius:8px;
      font-size:0.875rem;
      transition:all 0.2s;
      margin-bottom:0.2rem;
    }
    .filter-btn:hover { background:var(--bg-card2); color:var(--text); }
    .filter-btn.active { background:rgba(124,58,237,0.15); color:var(--primary-light); font-weight:600; }
    .servers-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem; }
    .server-card {
      background:var(--bg-card);
      border:1px solid var(--border-light);
      border-radius:16px;
      padding:1.25rem;
      transition:all 0.3s;
      cursor:pointer;
    }
    .server-card:hover { border-color:var(--primary); transform:translateY(-2px); }
    .server-card-header { display:flex; align-items:center; gap:0.875rem; margin-bottom:0.875rem; }
    .server-icon {
      width:48px;
      height:48px;
      border-radius:12px;
      background:linear-gradient(135deg, var(--primary), var(--blue));
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:1.25rem;
      flex-shrink:0;
    }
    .server-name { font-weight:700; font-size:0.9rem; }
    .server-members { font-size:0.75rem; color:var(--text-muted); }
    .server-desc { font-size:0.8rem; color:var(--text-muted); margin:0.5rem 0 1rem; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .server-footer { display:flex; align-items:center; justify-content:space-between; }
    .add-server-btn {
      background:linear-gradient(135deg, var(--primary), var(--primary-dark));
      color:white;
      border:none;
      border-radius:10px;
      padding:0.65rem 2rem;
      font-size:0.9rem;
      font-weight:700;
      cursor:pointer;
      margin-bottom:1.5rem;
      box-shadow:0 0 20px var(--primary-glow);
    }
    @media (max-width:768px) { .servers-layout { grid-template-columns:1fr; } .servers-sidebar { display:none; } }
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
      <div style="text-align:center;margin-bottom:1.5rem;">
        <button class="add-server-btn" onclick="addServer()">➕ Add Your Server</button>
      </div>

      <div class="servers-layout">
        <div class="servers-sidebar">
          <div class="filter-group">
            <div class="filter-title">Categories</div>
            <button class="filter-btn active" onclick="setCategory('All', this)">🌐 All</button>
            <button class="filter-btn" onclick="setCategory('Gaming', this)">🎮 Gaming</button>
            <button class="filter-btn" onclick="setCategory('Music', this)">🎵 Music</button>
            <button class="filter-btn" onclick="setCategory('Community', this)">👥 Community</button>
          </div>
          <div class="filter-group">
            <div class="filter-title">Sort by</div>
            <button class="filter-btn active" onclick="setSort('Most Active', this)">🔥 Most Active</button>
            <button class="filter-btn" onclick="setSort('Newest', this)">🆕 Newest</button>
            <button class="filter-btn" onclick="setSort('Top Rated', this)">⭐ Top Rated</button>
          </div>
        </div>

        <div>
          <div id="servers-loading" style="text-align:center;padding:3rem;"><div class="spinner" style="margin:0 auto;"></div></div>
          <div class="servers-grid" id="servers-grid" style="display:none;"></div>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    let currentCategory = 'All';
    let currentSort = 'Most Active';

    function setCategory(cat, el) {
      currentCategory = cat;
      document.querySelectorAll('.filter-group:first-child .filter-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      loadServers();
    }

    function setSort(sort, el) {
      currentSort = sort;
      document.querySelectorAll('.filter-group:last-child .filter-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      loadServers();
    }

    function addServer() {
      showToast('Server submission coming soon!', 'info');
    }

    function joinServer(id, name) {
      showToast(`Redirecting to join "${escapeHtml(name)}"...`, 'success');
      setTimeout(() => window.open('https://discord.gg/your-invite', '_blank'), 500);
    }

    function getCategoryBadge(cat) {
      const map = { Gaming: 'badge-gaming', Music: 'badge-music', Community: 'badge-community' };
      return map[cat] || 'badge-primary';
    }

    function getCategoryEmoji(cat) {
      const map = { Gaming: '🎮', Music: '🎵', Community: '👥' };
      return map[cat] || '🌐';
    }

    async function loadServers() {
      document.getElementById('servers-grid').style.display = 'none';
      document.getElementById('servers-loading').style.display = 'block';

      try {
        const params = new URLSearchParams({ category: currentCategory, sort: currentSort });
        const res = await fetch(`/api/servers?${params}`);
        const servers = await res.json();

        document.getElementById('servers-loading').style.display = 'none';
        const grid = document.getElementById('servers-grid');
        grid.style.display = 'grid';
        grid.innerHTML = '';

        servers.forEach(s => {
          const card = document.createElement('div');
          card.className = 'server-card';
          card.onclick = () => joinServer(s.id, s.name);
          card.innerHTML = `
            <div class="server-card-header">
              <div class="server-icon">${getCategoryEmoji(s.category)}</div>
              <div>
                <div class="server-name">${escapeHtml(s.name)}</div>
                <div class="server-members">👥 ${formatNumber(s.members)} members</div>
              </div>
              ${renderStars(s.rating)}
            </div>
            <div style="display:flex;gap:0.4rem;margin-bottom:0.5rem;">
              <span class="badge ${getCategoryBadge(s.category)}">${escapeHtml(s.category)}</span>
              ${s.active ? '<span class="badge badge-active">Active</span>' : ''}
            </div>
            <div class="server-desc">${escapeHtml(s.description)}</div>
            <div class="server-footer">
              <span style="font-size:0.8rem;color:var(--text-muted);">⭐ ${s.rating.toFixed(1)}</span>
              <button class="btn btn-discord btn-sm" onclick="event.stopPropagation();joinServer('${s.id}','${escapeHtml(s.name)}')">Join Server</button>
            </div>
          `;
          grid.appendChild(card);
        });
      } catch {
        document.getElementById('servers-loading').innerHTML = '<p style="color:var(--text-muted)">Failed to load servers.</p>';
      }
    }

    async function init() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }
      loadServers();
    }
    init();
  </script>
</body>
</html>