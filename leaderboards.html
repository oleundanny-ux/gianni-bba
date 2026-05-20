<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Music — GIANNI</title>
  <link rel="stylesheet" href="/css/style.css">
  <style>
    .music-player {
      max-width: 900px;
      margin: 2rem auto;
      background: linear-gradient(135deg, #0d1a2a, #0d0d1a);
      border: 1px solid rgba(59,130,246,0.3);
      border-radius: 20px;
      padding: 2rem;
    }
    .player-header { text-align:center; margin-bottom: 2rem; }
    .player-header h2 { font-size:1.2rem; font-weight:700; }
    .player-header p { color: var(--text-muted); font-size:0.875rem; }
    .disc-wrapper {
      width: 180px;
      height: 180px;
      margin: 0 auto 2rem;
      position: relative;
    }
    .disc {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #6366f1, #0f172a);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: spinDisc 4s linear infinite paused;
      font-size: 4rem;
      box-shadow: 0 0 40px rgba(99,102,241,0.4);
    }
    .disc.playing { animation-play-state: running; }
    @keyframes spinDisc { to { transform: rotate(360deg); } }
    .track-info { text-align:center; margin-bottom: 1.5rem; }
    .track-title { font-size:1.1rem; font-weight:700; }
    .track-artist { color: var(--text-muted); font-size:0.875rem; }
    .progress-section { margin-bottom: 1.5rem; }
    .time-row { display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem; }
    .progress-interactive {
      height: 6px;
      background: var(--bg-card2);
      border-radius: 3px;
      cursor: pointer;
      position: relative;
    }
    .progress-interactive-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #6366f1);
      border-radius: 3px;
      pointer-events: none;
    }
    .controls { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:1.5rem; }
    .ctrl-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 1.25rem;
      cursor: pointer;
      transition: color 0.2s;
      padding: 0.4rem;
    }
    .ctrl-btn:hover { color: var(--text); }
    .play-btn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(99,102,241,0.4);
      transition: transform 0.2s;
    }
    .play-btn:hover { transform: scale(1.08); }
    .volume-row { display:flex; align-items:center; gap:0.75rem; }
    .volume-slider { flex:1; height:4px; -webkit-appearance:none; appearance:none; background:var(--bg-card2); border-radius:2px; outline:none; }
    .volume-slider::-webkit-slider-thumb { -webkit-appearance:none; width:14px; height:14px; border-radius:50%; background:#3b82f6; cursor:pointer; }
    .playlist {
      margin-top: 2rem;
      background: var(--bg-card2);
      border-radius: 12px;
      overflow: hidden;
    }
    .playlist-header {
      padding: 1rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-light);
    }
    .playlist-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.875rem 1.25rem;
      cursor: pointer;
      transition: background 0.2s;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .playlist-item:hover { background: var(--bg-card); }
    .playlist-item.active { background: rgba(99,102,241,0.1); }
    .playlist-disc { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,#6366f1,#3b82f6); display:flex; align-items:center;justify-content:center; font-size:1rem; }
    .playlist-name { flex:1; font-size:0.875rem; font-weight:500; }
    .playlist-duration { font-size:0.75rem; color:var(--text-muted); }
    .waveform { display:flex; align-items:flex-end; gap:2px; height:40px; margin:1rem 0; }
    .wave-bar { width:4px; border-radius:2px; background: linear-gradient(180deg, #3b82f6, #6366f1); transition: height 0.3s; }
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
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <h2 style="font-size:1.5rem;font-weight:800;">🎵 GIANNI Music Player</h2>
        <button class="btn btn-outline btn-sm" onclick="savePlaylist()">💾 Save Playlist</button>
      </div>

      <div class="music-player">
        <div class="player-header">
          <h2 id="track-title">No track playing</h2>
          <p id="track-artist">Select a song from the playlist</p>
        </div>

        <div class="disc-wrapper">
          <div class="disc" id="disc">💿</div>
        </div>

        <div class="progress-section">
          <div class="time-row">
            <span id="time-current">0:00</span>
            <span id="time-total">0:00</span>
          </div>
          <div class="progress-interactive" id="progress-bar" onclick="seekTrack(event)">
            <div class="progress-interactive-fill" id="progress-fill" style="width:0%"></div>
          </div>
        </div>

        <div class="waveform" id="waveform"></div>

        <div class="controls">
          <button class="ctrl-btn" id="btn-shuffle" onclick="toggleShuffle()" title="Shuffle">🔀</button>
          <button class="ctrl-btn" onclick="prevTrack()" title="Previous">⏮</button>
          <button class="play-btn" id="play-btn" onclick="togglePlay()">▶</button>
          <button class="ctrl-btn" onclick="nextTrack()" title="Next">⏭</button>
          <button class="ctrl-btn" id="btn-repeat" onclick="toggleRepeat()" title="Repeat">🔁</button>
        </div>

        <div class="volume-row">
          <span>🔊</span>
          <input type="range" class="volume-slider" id="volume" min="0" max="100" value="70" oninput="setVolume(this.value)">
          <span id="volume-val" style="font-size:0.75rem;color:var(--text-muted);min-width:28px;">70%</span>
        </div>
      </div>

      <div class="playlist">
        <div class="playlist-header">
          <span style="font-weight:700;">Queue</span>
          <span style="font-size:0.8rem;color:var(--text-muted);" id="queue-count">0 songs</span>
        </div>
        <div id="playlist-items"></div>
      </div>
    </div>
  </div>

  <script src="/js/main.js"></script>
  <script>
    const TRACKS = [
      { id: 1, title: 'Chill Vibes', artist: 'Lo-Fi Artist', duration: '3:24', emoji: '🎵' },
      { id: 2, title: 'Night Drive', artist: 'Synth Wave', duration: '4:12', emoji: '🌙' },
      { id: 3, title: 'Gaming Time', artist: 'Electronic', duration: '2:58', emoji: '🎮' },
      { id: 4, title: 'Smooth Jazz', artist: 'Jazz Collective', duration: '5:01', emoji: '🎷' },
      { id: 5, title: 'Epic Boss Fight', artist: 'OST Master', duration: '3:45', emoji: '⚔️' },
    ];

    let currentTrack = 0;
    let isPlaying = false;
    let shuffle = false;
    let repeat = false;
    let progress = 0;
    let progressInterval = null;
    let waveInterval = null;

    function renderPlaylist() {
      const container = document.getElementById('playlist-items');
      document.getElementById('queue-count').textContent = `${TRACKS.length} songs`;
      container.innerHTML = '';

      TRACKS.forEach((t, i) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${i === currentTrack ? 'active' : ''}`;
        item.onclick = () => selectTrack(i);
        item.innerHTML = `
          <div class="playlist-disc">${t.emoji}</div>
          <div class="playlist-name">${escapeHtml(t.title)}<br><span style="color:var(--text-muted);font-size:0.75rem;">${escapeHtml(t.artist)}</span></div>
          <div class="playlist-duration">${t.duration}</div>
        `;
        container.appendChild(item);
      });
    }

    function selectTrack(idx) {
      currentTrack = idx;
      progress = 0;
      updateTrackInfo();
      renderPlaylist();
      if (isPlaying) startProgress();
    }

    function updateTrackInfo() {
      const t = TRACKS[currentTrack];
      document.getElementById('track-title').textContent = t.title;
      document.getElementById('track-artist').textContent = t.artist;
      document.getElementById('time-total').textContent = t.duration;
    }

    function togglePlay() {
      isPlaying = !isPlaying;
      document.getElementById('play-btn').textContent = isPlaying ? '⏸' : '▶';
      document.getElementById('disc').classList.toggle('playing', isPlaying);
      if (isPlaying) startProgress(); else stopProgress();
      animateWaveform();
    }

    function startProgress() {
      stopProgress();
      const parts = TRACKS[currentTrack].duration.split(':');
      const totalSec = parseInt(parts[0]) * 60 + parseInt(parts[1]);
      progressInterval = setInterval(() => {
        progress = Math.min(progress + (100 / totalSec), 100);
        document.getElementById('progress-fill').style.width = progress + '%';
        const elapsed = Math.floor((progress / 100) * totalSec);
        document.getElementById('time-current').textContent = `${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')}`;
        if (progress >= 100) { nextTrack(); }
      }, 1000);
    }

    function stopProgress() {
      if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
    }

    function nextTrack() {
      currentTrack = shuffle
        ? Math.floor(Math.random() * TRACKS.length)
        : (currentTrack + 1) % TRACKS.length;
      progress = 0;
      updateTrackInfo();
      renderPlaylist();
      if (isPlaying) startProgress();
    }

    function prevTrack() {
      currentTrack = (currentTrack - 1 + TRACKS.length) % TRACKS.length;
      progress = 0;
      updateTrackInfo();
      renderPlaylist();
      if (isPlaying) startProgress();
    }

    function seekTrack(e) {
      const bar = document.getElementById('progress-bar');
      const rect = bar.getBoundingClientRect();
      progress = ((e.clientX - rect.left) / rect.width) * 100;
      document.getElementById('progress-fill').style.width = progress + '%';
    }

    function toggleShuffle() {
      shuffle = !shuffle;
      document.getElementById('btn-shuffle').style.color = shuffle ? '#3b82f6' : '';
      showToast(shuffle ? 'Shuffle ON' : 'Shuffle OFF');
    }

    function toggleRepeat() {
      repeat = !repeat;
      document.getElementById('btn-repeat').style.color = repeat ? '#3b82f6' : '';
      showToast(repeat ? 'Repeat ON' : 'Repeat OFF');
    }

    function setVolume(v) {
      document.getElementById('volume-val').textContent = v + '%';
    }

    function savePlaylist() {
      showToast('Playlist saved!', 'success');
    }

    function buildWaveform() {
      const wf = document.getElementById('waveform');
      wf.innerHTML = '';
      for (let i = 0; i < 32; i++) {
        const bar = document.createElement('div');
        bar.className = 'wave-bar';
        bar.style.height = '4px';
        bar.style.flex = '1';
        wf.appendChild(bar);
      }
    }

    function animateWaveform() {
      if (waveInterval) { clearInterval(waveInterval); waveInterval = null; }
      if (!isPlaying) {
        document.querySelectorAll('.wave-bar').forEach(b => b.style.height = '4px');
        return;
      }
      waveInterval = setInterval(() => {
        if (!isPlaying) return;
        document.querySelectorAll('.wave-bar').forEach(b => {
          b.style.height = (Math.random() * 32 + 4) + 'px';
        });
      }, 150);
    }

    async function init() {
      const user = await initUser();
      if (!user) { window.location.href = '/login'; return; }
      buildWaveform();
      updateTrackInfo();
      renderPlaylist();
    }
    init();
  </script>
</body>
</html>