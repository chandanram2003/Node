import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("hello world\n");
    res.write("welcome to our server about page");
    res.end();
  } else {
    res.end("Another route");
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});