const http = require('http');

http.createServer((req, res) => {
  res.end("DevOps CI/CD Project Running");
}).listen(3000);