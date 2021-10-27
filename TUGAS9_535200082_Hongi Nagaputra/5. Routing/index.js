var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.post("/", function (req, res) {
  res.send("Post Request");
});

app.put("/user", function (req, res) {
  res.send("PUT Request");
});

app.delete("/user", function (req, res) {
  res.send("Delete Request");
});

app.use(express.static("public"));

app.listen(3000);
