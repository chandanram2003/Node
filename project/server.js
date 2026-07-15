import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 4000;

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.post("/formSubmit", async (req, res) => {
  try {
    console.log(req.body);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

  

    res.send("Data Saved Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Saving Data");
  }
});
app.listen(4000, () => {
  console.log(`Server running on http://localhost:${4000}`);
});
