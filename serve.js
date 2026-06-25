const http = require("http");
const fs   = require("fs");
const path = require("path");
const port = process.env.PORT || 3456;
const root = __dirname;

const mime = { ".html":"text/html", ".css":"text/css", ".js":"application/javascript",
               ".svg":"image/svg+xml", ".png":"image/png", ".json":"application/json" };

http.createServer((req, res) => {
  let filePath = path.join(root, req.url === "/" ? "/index.html" : req.url);
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end("Not found"); return; }
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mime[ext] || "text/plain", "Cache-Control": "no-store" });
  fs.createReadStream(filePath).pipe(res);
}).listen(port, () => console.log(`Serving on http://localhost:${port}`));
