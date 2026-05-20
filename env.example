<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bot Panel — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
  <style>
    .admin-layout { display:grid; grid-template-columns: 220px 1fr; gap:0; min-height:calc(100vh - 64px); }
    .admin-sidebar {
      background: #0a0a14;
      border-right: 1px solid var(--border-light);
      padding: 1.5rem 1rem;
    }
    .admin-sidebar-title { font-size:0.7rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.75rem; padding:0 0.5rem; }
    .admin-nav a {
      display:flex;
      align-items:center;
      gap:0.75rem;
      padding:0.65rem 0.875rem;
      border-radius:8px;
      color:var(--text-muted);
      text-decoration:none;
      font-size:0.875rem;
      font-weight:500;
      margin-bottom:0.2rem;
      transition:all 0.2s;
    }
    .admin-nav a:hover { background:var(--bg-card2); color:var(--text); }
    .admin-nav a.active { background:rgba(124,58,237,0.2); color:var(--primary-light); }
    .admin-nav a .dot { width:8px; height:8px; border-radius:50%; }
    .admin-content { padding: 2rem; }
    .admin-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; }
    .status-badge { display:flex; align-items:center; gap:0.5rem; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:50px; padding:0.4rem 1rem; font-size:0.8rem; color:var(--success); font-weight:600; }
    .stats-row { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; margin-bottom:1.5rem; }
    .charts-row { display:grid; grid-template-columns:1fr 300px; gap:1.5rem; }
    .chart-card { background:var(--bg-card); border:1px solid var(--border-light); border-radius:16px; padding:1.5rem; }
    .chart-title { font-size:0.95rem; font-weight:700; color:var(--primary-light); margin-bottom:1rem; text-align:center; }
    .send-msg-section { margin-top:1.5rem; background:var(--bg-card); border:1px solid var(--border-light); border-radius:16px; padding:1.5rem; }
    .form-row { display:flex; gap:0.75rem; }
    @media (max-width:900px) { .admin-layout { grid-template-columns:1fr; } .admin-sidebar { display:none; } .stats-row { grid-template-columns:repeat(2,1fr); } .charts-row { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="/" class="navbar-brand">GIANNI</a>
    <ul class="navbar-nav">
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/bot-panel" class="btn-bot-panel">⚙️ Bot Panel</a></li>
    </ul>
    <div class="navbar-user" id="navbar-user">
      <div class="spinner" style="width:24px;height:24px;border-width:2px;"></div>
    </div>
  </nav>

  <div class="page">
    <div class="admin-layout">
      <div class="admin-sidebar">
        <div class="admin-sidebar-title">Panel</div>
        <nav class="admin-nav">
          <a href="#" class="active" onclick="showSection('dashboard',this)"><span class="dot" style="background:var(--success);"></span> Dashboard</a>
          <a href="#" onclick="showSection('commands',this)"><span class="dot" style="background:var(--blue);"></span> Commands</a>
          <a href="#" onclick="showSection('embeds',this)"><span class="dot" style="background:var(--primary-light);"></span> Embeds</a>
          <a href="#" onclick="showSection('members',this)"><span class="dot" style="background:var(--warning);"></span> Members</a>
          <a href="#" onclick="showSection('server',this)"><span class="dot" style="background:var(--text-muted);"></span> Server</a>
          <a href="#" onclick="showSection('permissions',this)"><span class="dot" style="background:var(--danger);"></span> Permissions</a>
          <a href="#" onclick="showSection('protection',this)"><span class="dot" style="background:var(--success);"></span> Protection</a>
          <a href="#" onclick="showSection('games',this)"><span class="dot" style="background:var(--blue);"></span> Games</a>
          <a href="#" onclick="showSection('icons',this)"><span class="dot" style="background:var(--warning);"></span> Icons</a>
          <a href="#" onclick="showSection('emoji',this)"><span class="dot" style="background:var(--primary-light);"></span> Emoji</a>
          <a href="#" onclick="showSection('settings',this)"><span class="dot" style="background:var(--text-muted);"></span> Settings</a>
        </nav>
      </div>

      <div class="admin-content" id="admin-loading" style="display:flex;align-items:center;justify-content:center;">
        <div class="spinner"></div>
      </div>
      <div class="admin-content" id="admin-main" style="display:none;">

        <div id="section-dashboard">
          <div class="admin-header">
            <div>
              <h2 style="font-size:1.25rem;font-weight:800;">Admin Dashboard</h2>
              <p style="color:var(--text-muted);font-size:0.875rem;">Bot control center</p>
            </div>
            <div style="display:flex;gap:0.75rem;align-items:center;">
              <div class="status-badge">
                <span class="status-dot status-online"></span>
                Healthy status
              </div>
              <button class="btn btn-primary btn-sm" onclick="refreshStats()">🔄 Refresh</button>
            </div>
          </div>

          <div class="stats-row">
            <div class="stat-card">
              <div class="stat-value" id="stat-commands">-</div>
              <div class="stat-label">Total Commands</div>
            </div>
            <div class="stat-card">
              <div class="stat-value" id="stat-embeds">-</div>
              <div class="stat-label">Embed Templates</div>
            </div>
            <div class="stat-card">
              <div class="stat-value" id="stat-categories">-</div>
              <div class="stat-label">Categories</div>
            </div>
            <div class="stat-card">
              <div class="stat-value" id="stat-members">-</div>
              <div class="stat-label">Members Online</div>
            </div>
          </div>

          <div class="charts-row">
            <div class="chart-card">
              <div class="chart-title">Commands by Category</div>
              <canvas id="commandsChart" height="220"></canvas>
            </div>
            <div class="chart-card">
              <div class="chart-title">Embed Categories</div>
              <canvas id="embedsChart" height="220"></canvas>
            </div>
          </div>

          <div class="send-msg-section">
            <h3 style="font-size:0.95rem;font-weight:700;margin-bottom:1rem;">📨 Send Message to Channel</h3>
            <div class="form-row">
              <input type="text" class="form-input" id="channel-id" placeholder="Channel ID" style="max-width:200px;">
              <input type="text" class="form-input" id="msg-text" placeholder="Message content...">
              <button class="btn btn-primary" onclick="sendMessage()">Send →</button>
            </div>
          </div>
        </div>

        <div id="section-commands" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">⚡ Commands (110)</h2>
          <p style="color:var(--text-muted);">Command management panel. Connect your bot database to show real commands.</p>
        </div>
        <div id="section-embeds" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">📋 Embed Templates (111)</h2>
          <p style="color:var(--text-muted);">Manage embed message templates here.</p>
        </div>
        <div id="section-members" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">👥 Members</h2>
          <div id="members-list"><div class="spinner" style="margin:2rem auto;"></div></div>
        </div>
        <div id="section-server" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">🌐 Server Settings</h2>
          <p style="color:var(--text-muted);">Configure server-specific bot behavior.</p>
        </div>
        <div id="section-permissions" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">🔐 Permissions</h2>
          <p style="color:var(--text-muted);">Manage role-based command permissions.</p>
        </div>
        <div id="section-protection" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">🛡️ Protection</h2>
          <p style="color:var(--text-muted);">Anti-spam, auto-mod, and raid protection settings.</p>
        </div>
        <div id="section-games" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">🎮 Games Config</h2>
          <p style="color:var(--text-muted);">Configure game settings, channels, and XP rewards.</p>
        </div>
        <div id="section-icons" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">🖼️ Icons</h2>
          <p style="color:var(--text-muted);">Manage server emoji and icon assets.</p>
        </div>
        <div id="section-emoji" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">😀 Emoji</h2>
          <p style="color:var(--text-muted);">Manage custom emoji for the server.</p>
        </div>
        <div id="section-settings" style="display:none;">
          <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:1rem;">⚙️ Settings</h2>
          <p style="color:var(--text-muted);">Global bot configuration and preferences.</p>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    let commandsChart, embedsChart;

    function showSection(name, el) {
      document.querySelectorAll('.admin-nav a').forEach(a => a.classList.remove('active'));
      if (el) el.classList.add('active');
      document.querySelectorAll('[id^="section-"]').forEach(s => s.style.display = 'none');
      const sec = document.getElementById(`section-${name}`);
      if (sec) sec.style.display = 'block';
      if (name === 'members') loadMembers();
    }

    async function loadMembers() {
      try {
        const res = await fetch('/admin/members');
        const members = await res.json();
        const list = document.getElementById('members-list');

        const table = document.createElement('table');
        table.className = 'table';
        table.innerHTML = `
          <thead><tr><th>User</th><th>Joined</th><th>Roles</th></tr></thead>
          <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');
        members.forEach(m => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><div style="display:flex;align-items:center;gap:0.5rem;">
              ${m.avatar ? `<img src="${escapeHtml(m.avatar)}" style="width:28px;height:28px;border-radius:50%;">` : `<div style="width:28px;height:28px;border-radius:50%;background:var(--primary-dark);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">${m.username.charAt(0)}</div>`}
              ${escapeHtml(m.username)}
            </div></td>
            <td style="color:var(--text-muted);font-size:0.8rem;">${new Date(m.joinedAt).toLocaleDateString()}</td>
            <td><span class="badge badge-primary">${m.roles.length} roles</span></td>
          `;
          tbody.appendChild(tr);
        });

        list.innerHTML = '';
        list.appendChild(table);
      } catch {
        document.getElementById('members-list').innerHTML = '<p style="color:var(--text-muted)">Connect Discord bot to see members.</p>';
      }
    }

    async function refreshStats() {
      await loadStats();
      showToast('Stats refreshed!', 'success');
    }

    async function loadStats() {
      try {
        const res = await fetch('/admin/stats');
        const data = await res.json();

        document.getElementById('stat-commands').textContent = data.totalCommands;
        document.getElementById('stat-embeds').textContent = data.embedTemplates;
        document.getElementById('stat-categories').textContent = data.categories;
        document.getElementById('stat-members').textContent = data.onlineCount || 0;

        const catLabels = Object.keys(data.commandsByCategory);
        const catValues = Object.values(data.commandsByCategory);

        if (commandsChart) commandsChart.destroy();
        commandsChart = new Chart(document.getElementById('commandsChart'), {
          type: 'bar',
          data: {
            labels: catLabels,
            datasets: [{
              data: catValues,
              backgroundColor: 'rgba(124,58,237,0.6)',
              borderColor: 'rgba(168,85,247,0.8)',
              borderWidth: 1,
              borderRadius: 4
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              x: { ticks: { color: '#8888aa', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
              y: { ticks: { color: '#8888aa' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
          }
        });

        const embedLabels = Object.keys(data.embedsByCategory);
        const embedValues = Object.values(data.embedsByCategory);

        if (embedsChart) embedsChart.destroy();
        embedsChart = new Chart(document.getElementById('embedsChart'), {
          type: 'doughnut',
          data: {
            labels: embedLabels,
            datasets: [{
              data: embedValues,
              backgroundColor: ['rgba(124,58,237,0.7)', 'rgba(99,102,241,0.7)', 'rgba(59,130,246,0.7)'],
              borderColor: ['#7c3aed', '#6366f1', '#3b82f6'],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { labels: { color: '#8888aa', font: { size: 11 } } }
            }
          }
        });

      } catch (err) {
        showToast('Failed to load stats', 'error');
      }
    }

    async function sendMessage() {
      const channelId = document.getElementById('channel-id').value.trim();
      const message = document.getElementById('msg-text').value.trim();
      if (!channelId || !message) { showToast('Fill in channel ID and message', 'error'); return; }
      try {
        const res = await fetch('/admin/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ channelId, message })
        });
        const data = await res.json();
        if (data.success) {
          showToast('Message sent!', 'success');
          document.getElementById('msg-text').value = '';
        } else {
          showToast(data.error || 'Failed to send', 'error');
        }
      } catch {
        showToast('Error sending message', 'error');
      }
    }

    async function init() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }
      if (!user.isAdmin) { window.location.href = '/dashboard'; return; }

      document.getElementById('admin-loading').style.display = 'none';
      document.getElementById('admin-main').style.display = 'block';
      await loadStats();
    }
    init();
  </script>
</body>
</html>