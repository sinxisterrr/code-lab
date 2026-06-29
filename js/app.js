// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = localStorage.getItem('language') || 'python';
let currentChallengeIndex = parseInt(localStorage.getItem(`${currentLanguage}_index`) || '0');
let editor = null;
let chatHistory = [];
let hintIndex = 0;
let currentTab = 'lesson';

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
  const allChallenges = getChallenges();
  const tiers = ['beginner', 'intermediate', 'advanced'];
  const tierLabels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };

  tiers.forEach(tier => {
    const tierChallenges = allChallenges.filter(ch => ch.difficulty === tier);
    if (!tierChallenges.length) return;

    const header = document.createElement('div');
    header.className = 'tier-header tier-' + tier;
    header.textContent = tierLabels[tier];
    list.appendChild(header);

    tierChallenges.forEach(ch => {
      const i = allChallenges.indexOf(ch);
      const btn = document.createElement('button');
      btn.className = 'challenge-item' + (i === currentChallengeIndex ? ' active' : '');
      btn.innerHTML = `
        <span class="ch-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="ch-info">
          <span class="ch-title">${ch.title}</span>
          <span class="ch-meta">${ch.topic}</span>
        </span>
        <span class="ch-status">${getProgress(ch.id)}</span>
      `;
      btn.onclick = () => selectChallenge(i);
      list.appendChild(btn);
    });
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
  currentTab = 'lesson';
  document.getElementById('chat-messages').innerHTML = '';
  clearTerminal();
  loadChallenge();
  populateChallengeList();
  document.getElementById('sidebar').classList.remove('open');
}

function loadChallenge() {
  const ch = getCurrentChallenge();
  if (!ch) return;

  // Render lesson/task tab content
  syncTabUI();
  renderTab();

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
    const apiKey = localStorage.getItem('ollama_api_key');
    const model = localStorage.getItem('ollama_model') || 'gemma3:27b';
    if (!apiKey) throw new Error('No Ollama API key set — open Settings (⚙) to add one.');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-ollama-key': apiKey },
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
  currentTab = 'lesson';
  document.getElementById('chat-messages').innerHTML = '';
  closeDict();

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  populateChallengeList();
  loadChallenge();
  clearTerminal();
}

// ── Settings ───────────────────────────────────────────────────────────────
function loadSettings() {
  document.getElementById('claude-key-input').value = localStorage.getItem('claude_api_key') || '';
  document.getElementById('ollama-key-input').value = localStorage.getItem('ollama_api_key') || '';
  document.getElementById('ollama-model-input').value = localStorage.getItem('ollama_model') || 'gemma3:27b';
  const provider = localStorage.getItem('ai_provider') || 'ollama';
  setProvider(provider);
}

function saveSettings() {
  localStorage.setItem('claude_api_key', document.getElementById('claude-key-input').value.trim());
  localStorage.setItem('ollama_api_key', document.getElementById('ollama-key-input').value.trim());
  localStorage.setItem('ollama_model', document.getElementById('ollama-model-input').value.trim() || 'gemma3:27b');
  closeModal('settings-modal');
}

function setProvider(provider) {
  localStorage.setItem('ai_provider', provider);
  document.querySelectorAll('.provider-btn').forEach(b => b.classList.toggle('active', b.dataset.provider === provider));
  document.getElementById('claude-settings').style.display = provider === 'claude' ? '' : 'none';
  document.getElementById('ollama-settings').style.display = provider === 'ollama' ? '' : 'none';
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

// ── Tab System ────────────────────────────────────────────────────────────
function syncTabUI() {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === currentTab));
}

function switchTab(tab) {
  currentTab = tab;
  syncTabUI();
  renderTab();
}

function renderTab() {
  const ch = getCurrentChallenge();
  if (!ch) return;
  const marker = '**Your task:**';
  const split = ch.description.indexOf(marker);
  let md;
  if (currentTab === 'task') {
    md = split === -1 ? '*No specific task defined — explore freely!*' : ch.description.slice(split).trim();
  } else {
    md = split === -1 ? ch.description : ch.description.slice(0, split).trim();
  }
  const html = linkifyDictTerms(marked.parse(md));
  document.getElementById('lesson-content').innerHTML = html;
  document.querySelectorAll('#lesson-content .dict-link').forEach(el => {
    el.onclick = () => openDictEntry(el.dataset.dictId);
  });
}

function linkifyDictTerms(html) {
  return html.replace(/<a href="dict:([^"]+)"[^>]*>([^<]+)<\/a>/g,
    (_, id, text) => `<code class="dict-link" data-dict-id="${id}">${text}</code>`);
}

// ── Dictionary ─────────────────────────────────────────────────────────────
function getDictionary() {
  return (typeof DICTIONARY !== 'undefined' && DICTIONARY[currentLanguage]) || [];
}

function openDict() {
  const panel = document.getElementById('dict-panel');
  panel.classList.add('open');
  document.getElementById('dict-overlay').classList.add('visible');
  document.getElementById('dict-entry').style.display = 'none';
  document.getElementById('dict-list').style.display = '';
  document.getElementById('dict-search').value = '';
  renderDictList('');
  document.getElementById('dict-search').focus();
}

function closeDict() {
  document.getElementById('dict-panel').classList.remove('open');
  document.getElementById('dict-overlay').classList.remove('visible');
}

function openDictEntry(id) {
  const entry = getDictionary().find(e => e.id === id);
  if (!entry) return;
  document.getElementById('dict-panel').classList.add('open');
  document.getElementById('dict-overlay').classList.add('visible');
  document.getElementById('dict-list').style.display = 'none';
  document.getElementById('dict-entry').style.display = '';
  renderDictEntry(entry);
}

function renderDictList(query) {
  const q = query.toLowerCase();
  const entries = getDictionary();
  const filtered = q ? entries.filter(e =>
    e.term.toLowerCase().includes(q) ||
    (e.aliases || []).some(a => a.toLowerCase().includes(q)) ||
    e.category.toLowerCase().includes(q)
  ) : entries;

  const list = document.getElementById('dict-list');
  list.innerHTML = '';

  if (!filtered.length) {
    list.innerHTML = '<div class="dict-empty">No entries found.</div>';
    return;
  }

  const byCategory = {};
  filtered.forEach(e => {
    (byCategory[e.category] = byCategory[e.category] || []).push(e);
  });

  Object.entries(byCategory).forEach(([cat, items]) => {
    const header = document.createElement('div');
    header.className = 'dict-cat-header';
    header.textContent = cat;
    list.appendChild(header);

    items.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'dict-list-row';
      row.innerHTML = `
        <span class="dict-list-emoji">${entry.emoji}</span>
        <div class="dict-list-info">
          <span class="dict-list-term">${entry.term}</span>
          <span class="dict-list-summary">${entry.summary}</span>
        </div>
      `;
      row.onclick = () => {
        document.getElementById('dict-list').style.display = 'none';
        document.getElementById('dict-entry').style.display = '';
        renderDictEntry(entry);
      };
      list.appendChild(row);
    });
  });
}

function renderDictEntry(entry) {
  const challenges = getChallenges();

  const usedInHtml = (entry.usedIn && entry.usedIn.length) ? `
    <div class="dict-section">
      <div class="dict-section-label">Used in challenges</div>
      <div class="dict-used-in">
        ${entry.usedIn.map(id => {
          const ch = challenges.find(c => c.id === id);
          return ch ? `<span class="dict-challenge-link" data-id="${id}">${ch.title}</span>` : '';
        }).filter(Boolean).join('')}
      </div>
    </div>
  ` : '';

  const tipsHtml = (entry.tips && entry.tips.length) ? `
    <div class="dict-section">
      <div class="dict-section-label">✨ Tips</div>
      <ul class="dict-list-items">${entry.tips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  ` : '';

  const gotchasHtml = (entry.gotchas && entry.gotchas.length) ? `
    <div class="dict-section">
      <div class="dict-section-label">⚠️ Gotchas</div>
      <ul class="dict-list-items">${entry.gotchas.map(g => `<li>${g}</li>`).join('')}</ul>
    </div>
  ` : '';

  const syntaxHtml = entry.syntax ? `
    <div class="dict-section">
      <div class="dict-section-label">Syntax</div>
      <pre class="dict-syntax"><code>${escapeHtml(entry.syntax.trim())}</code></pre>
    </div>
  ` : '';

  const examplesHtml = (entry.examples && entry.examples.length) ? `
    <div class="dict-section">
      <div class="dict-section-label">Examples</div>
      <div class="dict-examples">
        ${entry.examples.map(ex => `
          <div class="dict-example">
            <code class="dict-ex-code">${escapeHtml(ex.code)}</code>
            ${ex.comment ? `<span class="dict-ex-comment">${ex.comment}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const el = document.getElementById('dict-entry');
  el.innerHTML = `
    <div class="dict-entry-back">
      <button class="dict-back-btn">← All Terms</button>
    </div>
    <div class="dict-entry-header">
      <span class="dict-entry-emoji">${entry.emoji}</span>
      <div>
        <div class="dict-entry-term">${entry.term}</div>
        <div class="dict-entry-category">${entry.category}</div>
      </div>
    </div>
    <div class="dict-entry-summary">${entry.summary}</div>
    ${entry.description ? `<div class="dict-entry-desc">${entry.description}</div>` : ''}
    ${syntaxHtml}
    ${examplesHtml}
    ${tipsHtml}
    ${gotchasHtml}
    ${usedInHtml}
  `;

  el.querySelector('.dict-back-btn').onclick = () => {
    el.style.display = 'none';
    document.getElementById('dict-list').style.display = '';
    renderDictList(document.getElementById('dict-search').value);
  };

  el.querySelectorAll('.dict-challenge-link').forEach(link => {
    link.onclick = () => {
      const idx = challenges.findIndex(c => c.id === link.dataset.id);
      if (idx !== -1) { closeDict(); selectChallenge(idx); }
    };
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

  // Lesson/Task tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
  });

  // Dictionary
  document.getElementById('dict-btn').onclick = openDict;
  document.getElementById('dict-close').onclick = closeDict;
  document.getElementById('dict-overlay').onclick = closeDict;
  document.getElementById('dict-search').addEventListener('input', e => renderDictList(e.target.value));

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
