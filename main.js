// Global utilities for GIANNI Portal

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
    userArea.innerHTML = `<a href="/login" class="btn btn-primary btn-sm">Login</a>`;
    return;
  }

  const avatarHTML = user.avatar
    ? `<img src="${escapeHtml(user.avatar)}" class="user-avatar" alt="${escapeHtml(user.username)}">`
    : `<div class="user-avatar-placeholder">${escapeHtml(user.username.charAt(0).toUpperCase())}</div>`;

  userArea.innerHTML = `
    ${avatarHTML}
    <span style="font-size:0.875rem;font-weight:600;">${escapeHtml(user.username)}</span>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style="color:var(--text-muted)">
      <path d="M2 4l4 4 4-4"/>
    </svg>
    <div class="dropdown-menu" id="user-dropdown">
      <a href="/dashboard">👤 Profile</a>
      <a href="/dashboard">⚙️ Settings</a>
      ${user.isAdmin ? '<a href="/bot-panel">🛡️ Bot Panel</a>' : ''}
      <div class="divider" style="margin:0.5rem 0"></div>
      <a href="/auth/logout" class="danger">🚪 Logout</a>
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

// XSS-safe toast notification
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
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
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

// Render stars
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '<span class="stars">';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '★';
    else if (i === full && half) html += '½';
    else html += '<span class="empty">☆</span>';
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
