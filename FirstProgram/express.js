import express from "express";
import path from "path";

import { fileURLToPath } from "url";

const server = express();

// __dirname create karna
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home Page
server.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "index.html"));/
  res.send('this is / page')
});

// About Page
server.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "about.html"));
  res.send('this is about page')

});

// Contact Page
server.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});


server.get("/formSubmit", (req, res) => {
  console.log(req.query);
  res.send("data taken");
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});