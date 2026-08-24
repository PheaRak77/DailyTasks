import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const README_PATH = path.join(__dirname, 'readme.md');
const PORT = 3456;

const server = http.createServer((req, res) => {
  if (req.url === '/api/readme') {
    if (fs.existsSync(README_PATH)) {
      const content = fs.readFileSync(README_PATH, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(content);
    } else {
      res.writeHead(404);
      res.end('README.md not found');
    }
    return;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README.md Live Preview</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-light.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <style>
    body {
      background-color: #0d1117;
      color: #c9d1d9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .header {
      position: sticky;
      top: 0;
      background: #161b22;
      border-bottom: 1px solid #30363d;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
    }
    .badge {
      background: #238636;
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
    }
    .container {
      max-width: 980px;
      margin: 24px auto 60px auto;
      padding: 32px 48px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      color: #24292f;
    }
    details summary {
      cursor: pointer;
      padding: 8px;
      background: #f6f8fa;
      border-radius: 6px;
      margin-bottom: 8px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="header">
    <div style="font-weight: bold; font-size: 16px; color: #f0f6fc;">
      📖 README.md Live Preview
    </div>
    <div style="display: flex; gap: 12px; align-items: center;">
      <span class="badge">● Live Auto-Sync</span>
      <button onclick="loadReadme()" style="background:#21262d; border:1px solid #30363d; color:#c9d1d9; padding:5px 12px; border-radius:6px; cursor:pointer;">
        🔄 Refresh
      </button>
    </div>
  </div>

  <div class="container">
    <article id="content" class="markdown-body">
      <p style="color: gray;">Loading README.md content...</p>
    </article>
  </div>

  <script>
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true
    });

    let lastContent = '';

    async function loadReadme() {
      try {
        const res = await fetch('/api/readme');
        const text = await res.text();
        if (text !== lastContent) {
          lastContent = text;
          document.getElementById('content').innerHTML = marked.parse(text);
        }
      } catch (err) {
        console.error('Failed to load README:', err);
      }
    }

    // Load immediately
    loadReadme();

    // Auto check for file changes every 1.5 seconds
    setInterval(loadReadme, 1500);
  </script>
</body>
</html>`;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log('Live README Server is running at http://localhost:' + PORT);
});
