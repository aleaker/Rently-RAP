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
const cosoBooking = require("./routes/bookingRouter");

var rentalToken;
exports.default = rentalToken;
// conf de passport
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const passport = require("passport");
rentalTokenfunction();
require("dotenv").config();

let input = {
  body: {
    Customer: {
      DocumentId: "38267336",
      DocumentType: "DNI",
      EmailAddress: "hola@ejemplo.com",
      Name: `Hanoi Pacheco`,
      FirstName: "Hanoi",
      LastName: "Pacheco",
      Telephone: "1144374925"
    },
    Additionals: [],
    AverageDayPrice: 830,
    Car: {
      Id: 29,
      Model: {
        AirConditioner: "Si",
        BigLuggage: 2,
        Brand: { Name: "Ford" },
        Category: { Id: 25, Name: "Chicos" },
        DailyPrice: 0,
        Description:
          "sdpufh asidfpasfs fusp fiusf sjknf saiuhfp sufñsadn fpisud pfiusdf",
        Doors: 5,
        Franchise: 20000,
        Gearbox: "Manual",
        Id: 39,
        ImagePath:
          "https://rently.blob.core.windows.net/demo/CarModel/76d79b6f-643c-42ed-bfed-c3c268a0d4b6.jpg",
        Multimedia: "MP3",
        Name: "Fiesta",
        Passengers: 4,
        SIPP: null,
        SmallLuggage: 2,
        Steering: "Hidraulica"
      }
    },
    Category: { Id: 25, Name: "Chicos" },
    Currency: null,
    DeliveryPlace: {
      Address: "Aeropuerto Internacional Ezeiza, Buenos Aires",
      Category: "Terminales",
      City: "Buenos Aires",
      Country: null,
      Id: 2,
      Name: "Aeropuerto de Ezeiza",
      Price: 400
    },
    Franchise: 20000,
    FromDate: "2020-03-01T13:00:00Z",
    HasFranchiseModifiers: false,
    IlimitedKm: false,
    Price: 27775,
    RentalData: { id: "5dee88d3e5dfd80716d59ee8", Name: "Shishitan" },
    ReturnPlace: {
      Address: "Aeropuerto Internacional Ezeiza, Buenos Aires",
      Category: "Terminales",
      City: "Buenos Aires",
      Country: null,
      Id: 2
    },
    ToDate: "2020-04-02T14:01:00Z",
    TotalDays: 32.5,
    TotalDaysString: "32 1/2"
  },
  user: {
    Active: true,
    CommissionScheme: [],
    Email: "adminis@rently.com",
    FirstName: "rently",
    LastName: "admin",
    Password: "$2a$10$PXNzTznLd8XBwinCXUg8dO3mJeWTfC5zGQPmTpidVPyFc2zGjfZ5q",
    Photo:
      "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png(42 kB)",
    Telephone: "1136363636",
    UserType: "rentlyadmin",
    __v: 0,
    _id: "5de6ae9be07a5c70caf563ba"
  }
};
setTimeout(() => {
  console.log("fetchiando token", rentalTokenfunction());
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));

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
