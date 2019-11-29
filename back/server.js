const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");
const chalk = require('chalk')

const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

require("dotenv").config();

app.listen(3000, function() {
  console.log("App listening on port 3000");
});

app.use("/api", require("./routes"));

app.use(function(req, res, next) {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next(null);
  }
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
