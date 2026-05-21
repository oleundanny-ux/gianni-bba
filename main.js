// Global utilities for GIANNI Portal
// No emojis — SVG icons only

// SVG icon definitions
const ICONS = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
};

// Fetch current user and set up navbar
async function initUser() {
  try {
    const res = await fetch('/api/me');
    if (!res.ok) return null;
    const user = await res.json();
    setupNavbar(user);
    return user;
  } catch {
    return null;
  }
}

function setupNavbar(user) {
  const userArea = document.getElementById('navbar-user');
  if (!userArea) return;

  if (!user) {
    userArea.innerHTML = `<a href="/login" class="btn btn-primary btn-sm">${ICONS.user} Login</a>`;
    return;
  }

  const avatarHTML = user.avatar
    ? `<img src="${escapeHtml(user.avatar)}" class="user-avatar" alt="${escapeHtml(user.username)}">`
    : `<div class="user-avatar-placeholder">${escapeHtml(user.username.charAt(0).toUpperCase())}</div>`;

  userArea.innerHTML = `
    ${avatarHTML}
    <span style="font-size:0.875rem;font-weight:600;">${escapeHtml(user.username)}</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;color:var(--text-muted);"><polyline points="6 9 12 15 18 9"/></svg>
    <div class="dropdown-menu" id="user-dropdown">
      <a href="/dashboard">${ICONS.user} Profile</a>
      <a href="/dashboard">${ICONS.settings} Settings</a>
      ${user.isAdmin ? `<a href="/bot-panel">${ICONS.shield} Bot Panel</a>` : ''}
      <div class="divider" style="margin:0.5rem 0"></div>
      <a href="/auth/logout" class="danger">${ICONS.logout} Logout</a>
    </div>
  `;

  userArea.addEventListener('click', (e) => {
    const menu = document.getElementById('user-dropdown');
    menu.classList.toggle('show');
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    const menu = document.getElementById('user-dropdown');
    if (menu) menu.classList.remove('show');
  });

  if (user.isAdmin) {
    const botPanelLink = document.getElementById('nav-botpanel');
    if (botPanelLink) botPanelLink.style.display = 'flex';
  }
}

// Toast notification with SVG icons
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const iconMap = {
    success: ICONS.check,
    error: ICONS.x,
    info: ICONS.info
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${iconMap[type] || iconMap.info}</span>
    <span>${escapeHtml(message)}</span>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// XSS escape helper
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Format numbers
function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

// Format time ago
function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
  if (seconds < 60) return seconds + 's ago';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
  if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
  return Math.floor(seconds / 86400) + 'd ago';
}

// Render stars
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '<span class="stars">';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '&#9733;';
    else if (i === full && half) html += '&#9733;'; // simplified
    else html += '<span class="empty">&#9734;</span>';
  }
  return html + '</span>';
}

// Set active nav link
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.navbar-nav a, .sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });
}

// Load guild info for homepage
async function loadGuildInfo() {
  try {
    const res = await fetch('/api/guild/info');
    const data = await res.json();
    document.querySelectorAll('[data-guild-online]').forEach(el => {
      el.textContent = formatNumber(data.onlineCount);
    });
    document.querySelectorAll('[data-guild-members]').forEach(el => {
      el.textContent = formatNumber(data.memberCount);
    });
  } catch {}
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  loadGuildInfo();
});
