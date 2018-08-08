var express = require("express");
var app = express();

var PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send({ Name: "Nahid" });
});

app.listen(PORT);
