// import {add,sub} from "./math.js";

// console.log(add());
// console.log(sub(5, 3));

//import fs from "fs";
// fs.writeFile("myFile.txt", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created");
// });

// fs.readFile("myFile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("server.js", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created");
// });

// import fs from "fs";
// fs.readFile("server.js", "utf-8", (err, value) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(value);
//   }
// });
// import { createServer } from "http";

// const server = createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Hello World");
//   }
// });

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

// import { createServer } from "http";

// const server = createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("hello http");
//   }
// });

// if (res.url == "/about") {
//   res.end("hello its about ");
// }

// if (req.url == "/content") {
//   res.write(" its content");
//   res.end();
// }

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello HTTP");
  } else if (req.url === "/about") {
    res.end("Hello its about");
  } else if (req.url === "/content") {
    res.write("Its content");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

server.get("/formSubmit", (req, res) => {
  console.log(res.query);
  res.send("data taken");
});
