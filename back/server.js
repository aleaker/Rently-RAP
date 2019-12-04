const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");

// conf de passport
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const passport = require("passport");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//Config de multer
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({
  storage
});

require("dotenv").config();

//conf passport
app.use(cookieParser());
app.use(session({ secret: "pepinillo" }));
app.use(passport.initialize());
app.use(passport.session());

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
