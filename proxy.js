// Tiny CORS proxy for Ollama Cloud
// Run: node proxy.js
// Then set Ollama Proxy URL in the app's Settings to: http://localhost:3001

const http = require('http');
const https = require('https');

const PORT = 3001;
const OLLAMA_HOST = 'ollama.com';

const server = http.createServer((req, res) => {
  const setCors = () => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  };

  setCors();

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end('Method not allowed');
    return;
  }

  const options = {
    hostname: OLLAMA_HOST,
    path: '/api/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(req.headers['authorization'] ? { Authorization: req.headers['authorization'] } : {}),
    },
  };

  const proxy = https.request(options, proxyRes => {
    res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    proxyRes.pipe(res);
  });

  proxy.on('error', err => {
    console.error('Proxy error:', err.message);
    res.writeHead(502);
    res.end(JSON.stringify({ error: err.message }));
  });

  req.pipe(proxy);
});

server.listen(PORT, () => {
  console.log(`Ollama CORS proxy running → http://localhost:${PORT}`);
  console.log(`Set "Ollama Proxy URL" in the app's Settings to: http://localhost:${PORT}`);
});
