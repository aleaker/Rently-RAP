const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  rentalTokenfunction,
  fetchToken
} = require("../back/ApiRental/RentalAPIs");
const { fetchCities } = require("./cities");
const cosoBooking = require("./coso");

var rentalToken;
exports.default = rentalToken;
// conf de passport
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const passport = require("passport");
rentalTokenfunction();

let input = {
  body: {
    RentalData: { id: "5df15a0e7c464d3203332f3b", Name: "Shishitan" },
    FromDate: new Date(2020, 03, 01, 10, 00),
    ToDate: new Date(2020, 07, 02, 10, 00),
    deliveryPlace: { id: 4 },
    returnPlace: { id: 4 },
    Car: { Model: { id: 29 } },
    illimitedKm: true,
    Customer: {
      Name: "Pepito Martinez",
      EmailAddress: "hola@ejemplo.com",
      DocumentId: "38267336",
      CellPhone: "1144374925"
    },
    Extra: "El cliente llega en el vuelo AA234 a las 23:50"
  }
};
setTimeout(() => {
  console.log("fetchiando token", rentalTokenfunction());
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));

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

  cosoBooking(input);

  fetchCities();

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
}, 3000);
