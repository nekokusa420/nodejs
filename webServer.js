const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request has received");
});

server.listen(3000, "localhost", () => {
  console.log("server is listening port 3000");
});
