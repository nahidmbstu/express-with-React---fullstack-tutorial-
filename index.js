var express = require("express");
var app = express();

var PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send({ Hello: "Welcome" });
});

app.listen(PORT);
