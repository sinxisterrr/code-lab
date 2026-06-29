// Code execution engine — Python via Pyodide, TypeScript via ts.transpileModule

let pyodideInstance = null;
let pyodideLoading = false;
let pyodideReady = false;

async function initPyodide() {
  if (pyodideReady) return pyodideInstance;
  if (pyodideLoading) {
    // Wait for it
    while (pyodideLoading) await new Promise(r => setTimeout(r, 100));
    return pyodideInstance;
  }
  pyodideLoading = true;
  updateTerminal('⏳ Loading Python runtime (first run only)...', 'info');
  pyodideInstance = await loadPyodide();
  pyodideReady = true;
  pyodideLoading = false;
  return pyodideInstance;
}

async function runPython(code, testCode = '') {
  const pyodide = await initPyodide();

  // Set up stdout capture
  pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
  `);

  let output = '';
  let success = false;

  try {
    pyodide.runPython(code);
    if (testCode) {
      pyodide.runPython(testCode);
    }
    output = pyodide.runPython('sys.stdout.getvalue()');
    success = true;
  } catch (err) {
    output = pyodide.runPython('sys.stdout.getvalue()');
    const errText = err.message || String(err);
    // Clean up the traceback a bit
    const lines = errText.split('\n');
    const cleanErr = lines.filter(l => !l.includes('File "<exec>"') && !l.includes('pyodide')).join('\n');
    output += '\n' + (cleanErr || errText);
    success = false;
  }

  return { success, output: output.trim() };
}

let tsLoading = false;
let tsReady = false;

async function ensureTypeScript() {
  if (tsReady) return;
  if (tsLoading) {
    while (tsLoading) await new Promise(r => setTimeout(r, 100));
    return;
  }
  if (window.ts) { tsReady = true; return; }
  tsLoading = true;
  updateTerminal('⏳ Loading TypeScript compiler (first run only)...', 'info');
  await new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/typescript@5.3.3/lib/typescript.min.js';
    s.onload = () => { tsReady = true; tsLoading = false; resolve(); };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function runTypeScript(code, testCode = '') {
  await ensureTypeScript();

  const logs = [];
  const sandboxConsole = {
    log:   (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    error: (...args) => logs.push('❌ ' + args.map(String).join(' ')),
    warn:  (...args) => logs.push('⚠️ ' + args.map(String).join(' ')),
  };

  const helpers = `
function expect(val, expected, msg) {
  if (JSON.stringify(val) !== JSON.stringify(expected))
    throw new Error(msg || ('Expected ' + JSON.stringify(expected) + ', got ' + JSON.stringify(val)));
}
`;

  try {
    const fullCode = helpers + '\n' + code + (testCode ? '\n' + testCode : '');
    const compiled = ts.transpileModule(fullCode, {
      compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.None, strict: false },
    });

    // Wrap in async IIFE so top-level await works in both user code and test code
    const fn = new Function('console', `return (async function(){${compiled.outputText}})()`);
    const ret = fn(sandboxConsole);
    await ret;

    return { success: true, output: logs.join('\n').trim() };
  } catch (err) {
    return { success: false, output: [...logs, '❌ ' + (err.message || err)].join('\n').trim() };
  }
}

// Named executeCode to avoid conflict with app.js runCode
async function executeCode(language, code, testCode = '') {
  if (language === 'python') {
    return runPython(code, testCode);
  } else {
    return runTypeScript(code, testCode);
  }
}
