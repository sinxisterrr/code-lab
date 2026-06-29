export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { model, messages } = req.body;
  const apiKey = process.env.OLLAMA_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OLLAMA_API_KEY not set in environment' });

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
