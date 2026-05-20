<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, var(--bg-dark) 70%);
    }
    .login-wrapper {
      width: 100%;
      max-width: 420px;
      padding: 1rem;
    }
    .login-card {
      background: rgba(19, 19, 31, 0.9);
      border: 1px solid rgba(124,58,237,0.3);
      border-radius: 20px;
      padding: 2.5rem;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 60px rgba(124,58,237,0.2);
    }
    .login-title {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: 3px;
      background: linear-gradient(135deg, #c084fc, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: 2rem;
    }
    .form-group { margin-bottom: 1rem; }
    .form-label { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem; display: block; }
    .input-icon { position: relative; }
    .input-icon-inner {
      position: absolute;
      left: 0.875rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 1rem;
    }
    .input-icon .form-input { padding-left: 2.5rem; }
    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.75rem 0;
      font-size: 0.8rem;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--text-muted);
      cursor: pointer;
    }
    .forgot-link { color: var(--primary-light); text-decoration: none; }
    .forgot-link:hover { text-decoration: underline; }
    .divider-text {
      text-align: center;
      color: var(--text-dim);
      font-size: 0.8rem;
      margin: 1.25rem 0;
      position: relative;
    }
    .divider-text::before, .divider-text::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 42%;
      height: 1px;
      background: var(--border-light);
    }
    .divider-text::before { left: 0; }
    .divider-text::after { right: 0; }
    .oauth-buttons { display: flex; gap: 0.75rem; }
    .oauth-buttons .btn { flex: 1; justify-content: center; font-size: 0.875rem; }
    .login-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    .login-footer a { color: var(--primary-light); text-decoration: none; }
    .login-footer a:hover { text-decoration: underline; }
    .error-msg {
      background: rgba(239,68,68,0.1);
      border: 1px solid var(--danger);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: var(--danger);
      font-size: 0.875rem;
      margin-bottom: 1rem;
      display: none;
    }
    .error-msg.show { display: block; }
  </style>
</head>
<body>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-title">GIANNI</div>

      <div class="error-msg" id="error-msg"></div>

      <div class="form-group">
        <div class="input-icon">
          <span class="input-icon-inner">✉️</span>
          <input type="text" class="form-input" id="email" placeholder="Email / Discord ID">
        </div>
      </div>

      <div class="form-group">
        <div class="input-icon">
          <span class="input-icon-inner">🔒</span>
          <input type="password" class="form-input" id="password" placeholder="Password">
        </div>
      </div>

      <div class="form-options">
        <label class="checkbox-label">
          <input type="checkbox" id="remember"> Remember me
        </label>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>

      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:0.5rem;" onclick="handleLogin()">
        Login
      </button>

      <div class="divider-text">or continue with</div>

      <div class="oauth-buttons">
        <a href="/auth/discord" class="btn btn-discord">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.081.114 18.104.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
          Discord
        </a>
        <a href="#" class="btn btn-google" onclick="showToast('Google OAuth coming soon!','info');return false;">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google
        </a>
      </div>

      <div class="login-footer">
        Don't have an account? <a href="#">Register</a><br>
        <a href="/">Back to home</a>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('error')) {
      const msg = document.getElementById('error-msg');
      msg.textContent = 'Authentication failed. Please try again.';
      msg.classList.add('show');
    }

    function handleLogin() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
      }
      showToast('Email login not implemented yet. Use Discord OAuth.', 'error');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleLogin();
    });
  </script>
</body>
</html>