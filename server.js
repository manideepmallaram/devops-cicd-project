const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

http.createServer((req, res) => {

  let filePath = "." + (req.url === "/" ? "/index.html" : req.url);

  const ext = path.extname(filePath);

  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg"
  };

  const contentType = contentTypes[ext] || "text/plain";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });

}).listen(port, "0.0.0.0", () => {
  console.log("Server running on port " + port);
});