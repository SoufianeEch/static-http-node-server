// import libraries
const http = require("http");
const fs = require("fs/promises");
const path = require("path");

// variables
const PORT = 3000;

// file types (mimeType)
const mimeType = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpg",
  ".mp3": "audio/mpeg",
};

// allowed routes
const allowedRoutes = {
  "/": "home.html",
  "/about": "about.html",
};

// actual server

http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      let file = allowedRoutes[req.url]; // note: file is not a const
      if (!file) file = req.url.slice(1);
      if (!file) {
        res.writeHead(404, { "content-type": "text/plain" });
        return res.end("404 - file not found");
      }
      let filePath = path.join(__dirname,"public", file);
      if (req.url.startsWith("/assets")) filePath = path.join(__dirname, req.url.slice(1))

      try {
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath);
        const type = mimeType[ext];

        res.writeHead(200, {"content-type": type});
        res.end(data)
      } catch (err) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 - file not found");
      }
    } else {
      res.writeHead(405, { "content-type": "text/plain" });
      res.end("405 - method not allowed");
    }
  })
  .listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
