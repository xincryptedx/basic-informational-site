const http = require("http");
const fs = require("fs/promises");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;

  let filePath = "./index.html";

  switch (url) {
    case "/":
      filePath = "./src/index.html";
      break;
    case "/about":
      filePath = "./src/pages/about.html";
      break;
    case "/contact-me":
      filePath = "./src/pages/contact-me.html";
      break;
    default:
      filePath = "./src/pages/404.html";
      break;
  }

  const asyncReadFile = async (res, filePath) => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  };

  asyncReadFile(res, filePath);
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
