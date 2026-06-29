export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-ollama-key');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  // User's own key from the browser, forwarded here so CORS isn't an issue
  const apiKey = req.headers['x-ollama-key'];
  if (!apiKey) return res.status(400).json({ error: 'No Ollama API key provided. Add it in Settings.' });

  const { model, messages } = req.body;

  const upstream = await fetch('https://ollama.com/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, stream: false }),
  });

  const data = await upstream.json();
  res.status(upstream.status).json(data);
}
