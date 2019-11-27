const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");

//Requiero los modelos
const registerRentalRouter = require("./registerRental");
const RentlyAdmin = require("../models/RentlyAdmin");
const Company = require("../models/Company");
const CarRental = require("../models/CarRental");
const CompanyAdmin = require("../models/CompanyAdmin");
const Commission = require("../models/Commission");
const Salesperson = require("../models/Salesperson");
const Booking = require("../models/Booking");

router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/registerRental", registerRentalRouter);

//RentlyAdmin
router.post("/rently", (req, resp) => {
  RentlyAdmin.create(req.body);
  console.log("RentlyAdmin creado");
});

//Company
router.post("/company", (req, res) => {
  Company.create(req.body);
  console.log("Compania guardada");
});

//CompanyAdmin
router.post("/companyAdmin", (req, res) => {
  CompanyAdmin.create(req.body);
  console.log("CompanyAdmin guardado");
});

//CarRental
router.post("/carRental", (req, res) => {
  CarRental.create(req.body);
  console.log("Rentadora guardada");
});

//Commission
router.post("/commission", (req, res) => {
  Commission.create(req.body);
  console.log("Comision guardada");
});

//Salesperson
router.post("/salesperson", (req, res) => {
  Salesperson.create(req.body);
  console.log("Vendedor guardado");
});

//Booking
router.post("/booking", (req, res) => {
  Booking.create(req.body);
  console.log("Reserva guardado");
});

module.exports = router;
