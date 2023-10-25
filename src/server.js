const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "contact-me.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "html", "404.html"));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
