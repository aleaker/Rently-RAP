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
router.get("/rently", async (req, res) => {
  const rentlyAdmin = await RentlyAdmin.find();
  res.json(rentlyAdmin);
});

router.post("/rently", (req, res) => {
  RentlyAdmin.create(req.body);
  console.log("RentlyAdmin creado");
});

//Company
router.get("/company", async (req, res) => {
  const company = await Company.find();
  res.json(company);
});

router.post("/company", (req, res) => {
  Company.create(req.body);
  console.log("Compania guardada");
});

//CompanyAdmin
router.get("/companyAdmin", async (req, res) => {
  const companyAdmin = await CompanyAdmin.find();
  res.json(companyAdmin);
});

router.post("/companyAdmin", (req, res) => {
  CompanyAdmin.create(req.body);
  console.log("CompanyAdmin guardado");
});

//CarRental
router.get("/carRental", async (req, res) => {
  const carRental = await CarRental.find();
  res.json(carRental);
});

router.post("/carRental", (req, res) => {
  CarRental.create(req.body);
  console.log("Rentadora guardada");
});

//Commission
router.get("/commission", async (req, res) => {
  const commission = await Commission.find();
  res.json(commission);
});

router.post("/commission", (req, res) => {
  Commission.create(req.body);
  console.log("Comision guardada");
});

//Salesperson
router.get("/salesperson", async (req, res) => {
  const salesperson = await Salesperson.find();
  res.json(salesperson);
});

router.post("/salesperson", (req, res) => {
  Salesperson.create(req.body);
  console.log("Vendedor guardado");
});

//Booking
router.get("/booking", async (req, res) => {
  const booking = await Booking.find();
  res.json(booking);
});

router.post("/booking", (req, res) => {
  Booking.create(req.body);
  console.log("Reserva guardada");
});

module.exports = router;
