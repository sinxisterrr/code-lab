// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = localStorage.getItem('language') || 'python';
let currentChallengeIndex = parseInt(localStorage.getItem(`${currentLanguage}_index`) || '0');
let editor = null;
let chatHistory = [];
let hintIndex = 0;

// ── Init ───────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initEditor();
  populateChallengeList();
  loadChallenge();
  setupEventListeners();
  loadSettings();
});

// ── Monaco Editor ──────────────────────────────────────────────────────────
function initEditor() {
  require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
  require(['vs/editor/editor.main'], () => {
    const isDark = true;
    editor = monaco.editor.create(document.getElementById('editor'), {
      value: '',
      language: currentLanguage === 'python' ? 'python' : 'typescript',
      theme: 'vs-dark',
      fontSize: 14,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      minimap: { enabled: false },
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      wordWrap: 'on',
      padding: { top: 16 },
    });
    loadChallenge(); // re-load now that editor is ready
  });
}

// ── Challenge Management ────────────────────────────────────────────────────
function getChallenges() {
  return CHALLENGES[currentLanguage] || [];
}

function getCurrentChallenge() {
  return getChallenges()[currentChallengeIndex] || getChallenges()[0];
}

function populateChallengeList() {
  const list = document.getElementById('challenge-list');
  list.innerHTML = '';
  getChallenges().forEach((ch, i) => {
    const btn = document.createElement('button');
    btn.className = 'challenge-item' + (i === currentChallengeIndex ? ' active' : '');
    btn.innerHTML = `
      <span class="ch-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="ch-info">
        <span class="ch-title">${ch.title}</span>
        <span class="ch-meta">${ch.topic} · ${ch.difficulty}</span>
      </span>
      <span class="ch-status">${getProgress(ch.id)}</span>
    `;
    btn.onclick = () => selectChallenge(i);
    list.appendChild(btn);
  });
}

function getProgress(id) {
  const done = localStorage.getItem(`progress_${id}`);
  if (done === 'pass') return '✅';
  if (done === 'attempted') return '🔄';
  return '';
}

function setProgress(id, status) {
  localStorage.setItem(`progress_${id}`, status);
}

function selectChallenge(index) {
  currentChallengeIndex = index;
  localStorage.setItem(`${currentLanguage}_index`, index);
  hintIndex = 0;
  chatHistory = [];
  document.getElementById('chat-messages').innerHTML = '';
  clearTerminal();
  loadChallenge();
  populateChallengeList();
  document.getElementById('sidebar').classList.remove('open');
}

function loadChallenge() {
  const ch = getCurrentChallenge();
  if (!ch) return;

  // Render description
  document.getElementById('lesson-content').innerHTML = marked.parse(ch.description);

  // Load saved code or starter
  const saved = localStorage.getItem(`code_${ch.id}`);
  if (editor) {
    const lang = currentLanguage === 'python' ? 'python' : 'typescript';
    monaco.editor.setModelLanguage(editor.getModel(), lang);
    editor.setValue(saved || ch.starterCode);
  }

  clearTerminal();
  hintIndex = 0;

  // Update UI
  document.getElementById('challenge-title').textContent = ch.title;
  document.getElementById('difficulty-badge').textContent = ch.difficulty;
  document.getElementById('difficulty-badge').className = 'badge ' + ch.difficulty;
  document.getElementById('topic-badge').textContent = ch.topic;

  // Nav buttons
  const challenges = getChallenges();
  document.getElementById('prev-btn').disabled = currentChallengeIndex === 0;
  document.getElementById('next-btn').disabled = currentChallengeIndex === challenges.length - 1;
}

// ── Running Code ───────────────────────────────────────────────────────────
async function runCode(withTests = false) {
  if (!editor) return;
  const ch = getCurrentChallenge();
  const code = editor.getValue();

  // Save progress
  localStorage.setItem(`code_${ch.id}`, code);

  clearTerminal();
  updateTerminal('Running...', 'info');

  const btn = withTests ? document.getElementById('submit-btn') : document.getElementById('run-btn');
  btn.disabled = true;

  try {
    const testCode = withTests ? ch.testCode : '';
    const result = await executeCode(currentLanguage, code, testCode);

    clearTerminal();
    if (result.output) {
      updateTerminal(result.output, result.success ? 'output' : 'error');
    }

    if (withTests) {
      if (result.output && result.output.includes('✅')) {
        setProgress(ch.id, 'pass');
        populateChallengeList();
        showCelebration();
      } else {
        setProgress(ch.id, 'attempted');
        populateChallengeList();
      }
    }
  } catch (err) {
    clearTerminal();
    updateTerminal('Error: ' + err.message, 'error');
  }

  btn.disabled = false;
}

// ── Terminal ───────────────────────────────────────────────────────────────
function updateTerminal(text, type = 'output') {
  const terminal = document.getElementById('terminal-output');
  const line = document.createElement('div');
  line.className = `terminal-line ${type}`;
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function clearTerminal() {
  document.getElementById('terminal-output').innerHTML = '';
}

// ── AI Chat ────────────────────────────────────────────────────────────────
async function sendChat(userMessage) {
  if (!userMessage.trim()) return;

  const ch = getCurrentChallenge();
  const code = editor ? editor.getValue() : '';

  appendChatMessage('user', userMessage);
  chatHistory.push({ role: 'user', content: userMessage });

  const typingEl = appendChatMessage('assistant', '...');
  typingEl.classList.add('typing');

  const systemPrompt = `You are a friendly, encouraging coding tutor named CodeBot. The student is working on this challenge:

**Title:** ${ch.title}
**Language:** ${currentLanguage}
**Difficulty:** ${ch.difficulty}

**Challenge description:**
${ch.description.replace(/#+\s*/g, '').replace(/`/g, "'")}

**Their current code:**
\`\`\`${currentLanguage}
${code}
\`\`\`

Guide them toward the solution WITHOUT giving the complete answer. Ask leading questions, explain the relevant concept, and give small nudges. Be conversational and encouraging. Keep responses concise (2-4 paragraphs max).`;

  try {
    const response = await callAI(systemPrompt, chatHistory.slice(-6));
    typingEl.classList.remove('typing');
    typingEl.innerHTML = marked.parse(response);
    chatHistory.push({ role: 'assistant', content: response });
  } catch (err) {
    typingEl.classList.remove('typing');
    typingEl.textContent = '⚠️ ' + err.message;
  }
}

function appendChatMessage(role, content) {
  const el = document.createElement('div');
  el.className = `chat-message ${role}`;
  if (role === 'assistant' && content !== '...') {
    el.innerHTML = marked.parse(content);
  } else {
    el.textContent = content;
  }
  const messages = document.getElementById('chat-messages');
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  return el;
}

// ── AI API Call ────────────────────────────────────────────────────────────
async function callAI(systemPrompt, history) {
  const provider = localStorage.getItem('ai_provider') || 'claude';

  if (provider === 'claude') {
    const apiKey = localStorage.getItem('claude_api_key');
    if (!apiKey) throw new Error('No Claude API key set — open Settings (⚙) to add one.');

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: systemPrompt,
        messages: history,
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || `Claude error ${res.status}`);
    return data.content[0].text;

  } else if (provider === 'ollama') {
    const model = localStorage.getItem('ollama_model') || 'gemma3:27b';

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemPrompt }, ...history],
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `Ollama error ${res.status}`);
    return data.message?.content || 'No response';
  }

  throw new Error('Unknown AI provider');
}

// ── Hint System ────────────────────────────────────────────────────────────
function showHint() {
  const ch = getCurrentChallenge();
  if (!ch.hints || !ch.hints.length) return;

  const hint = ch.hints[hintIndex % ch.hints.length];
  hintIndex++;

  appendChatMessage('assistant', `💡 **Hint ${hintIndex}/${ch.hints.length}:** ${hint}`);
  const messages = document.getElementById('chat-messages');
  messages.scrollTop = messages.scrollHeight;
}

// ── Language Switch ────────────────────────────────────────────────────────
function switchLanguage(lang) {
  if (lang === currentLanguage) return;
  currentLanguage = lang;
  currentChallengeIndex = parseInt(localStorage.getItem(`${lang}_index`) || '0');
  localStorage.setItem('language', lang);
  hintIndex = 0;
  chatHistory = [];
  document.getElementById('chat-messages').innerHTML = '';

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  populateChallengeList();
  loadChallenge();
  clearTerminal();
}

// ── Settings ───────────────────────────────────────────────────────────────
function loadSettings() {
  document.getElementById('claude-key-input').value = localStorage.getItem('claude_api_key') || '';
  document.getElementById('ollama-model-input').value = localStorage.getItem('ollama_model') || 'gemma3:27b';
  const provider = localStorage.getItem('ai_provider') || 'claude';
  document.querySelectorAll('.provider-btn').forEach(b => b.classList.toggle('active', b.dataset.provider === provider));
}

function saveSettings() {
  localStorage.setItem('claude_api_key', document.getElementById('claude-key-input').value.trim());
  localStorage.setItem('ollama_model', document.getElementById('ollama-model-input').value.trim() || 'gemma3:27b');
  closeModal('settings-modal');
}

function setProvider(provider) {
  localStorage.setItem('ai_provider', provider);
  document.querySelectorAll('.provider-btn').forEach(b => b.classList.toggle('active', b.dataset.provider === provider));
}

// ── Modals ─────────────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ── Celebration ────────────────────────────────────────────────────────────
function showCelebration() {
  const banner = document.createElement('div');
  banner.className = 'celebration';
  banner.innerHTML = '🎉 Challenge Complete!';
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 3000);
}

// ── Event Listeners ────────────────────────────────────────────────────────
function setupEventListeners() {
  // Run & Submit
  document.getElementById('run-btn').onclick = () => runCode(false);
  document.getElementById('submit-btn').onclick = () => runCode(true);
  document.getElementById('hint-btn').onclick = showHint;

  // Chat input
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  chatSend.onclick = () => {
    const msg = chatInput.value.trim();
    if (msg) { chatInput.value = ''; sendChat(msg); }
  };
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      chatSend.click();
    }
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => switchLanguage(btn.dataset.lang);
    if (btn.dataset.lang === currentLanguage) btn.classList.add('active');
  });

  // Challenge nav
  document.getElementById('prev-btn').onclick = () => {
    if (currentChallengeIndex > 0) selectChallenge(currentChallengeIndex - 1);
  };
  document.getElementById('next-btn').onclick = () => {
    const challenges = getChallenges();
    if (currentChallengeIndex < challenges.length - 1) selectChallenge(currentChallengeIndex + 1);
  };

  // Settings
  document.getElementById('settings-btn').onclick = () => { loadSettings(); openModal('settings-modal'); };
  document.getElementById('settings-save').onclick = saveSettings;
  document.getElementById('settings-cancel').onclick = () => closeModal('settings-modal');

  document.querySelectorAll('.provider-btn').forEach(btn => {
    btn.onclick = () => setProvider(btn.dataset.provider);
  });

  // Sidebar toggle (mobile)
  document.getElementById('sidebar-toggle').onclick = () => {
    document.getElementById('sidebar').classList.toggle('open');
  };

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(el => {
    el.onclick = (e) => { if (e.target === el) closeModal(el.id); };
  });

  // Keyboard shortcut: Ctrl+Enter to run
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runCode(false);
    }
  });
}
