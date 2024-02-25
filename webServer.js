const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("Request has received");
  // console.log(req.url);
  // console.log(req.method);

  let path = "./page/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/aboutme":
      path += "about.html";
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end;
      //永久轉址
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (error, data) => {
    if (error) console.log(error);
    else res.write(data);
    res.end();
  });
});

// res.write('<meta charset="utf-8" />');
// res.write("<h1>hello</h1>");
// res.write("<h2>NodeJS入門課程</h2>");
// res.end();

server.listen(3000, "localhost", () => {
  console.log("server is listening port 3000");
});
