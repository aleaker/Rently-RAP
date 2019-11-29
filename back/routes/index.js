const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");
const createCompanyRouter = require('./createCompany')

//Requiero los modelos
const registerRentalRouter = require("./registerRental");
const RentlyAdmin = require("../models/RentlyAdmin");
const Company = require("../models/Company");
const CarRental = require("../models/CarRental");
const CompanyAdmin = require("../models/CompanyAdmin");
const Commission = require("../models/Commission");
const Salesperson = require("../models/Salesperson");
const Booking = require("../models/Booking");
const User = require('../models/Users')

router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/registerRental", registerRentalRouter);
router.use("/createCompany", createCompanyRouter )

//RentlyAdmin
router.get("/rently", async (req, res) => {
  const rentlyAdmin = await RentlyAdmin.find();
  res.json(rentlyAdmin);
});

router.get('/users', (req, res)=>{
  User.find().then(e=>res.json(e))
})

router.post("/rently", (req, res) => {
  RentlyAdmin.create(req.body);
  console.log("RentlyAdmin creado");
  res.redirect("/api/rently");
});

//Company
router.get("/company", async (req, res) => {
  const company = await Company.find();
  res.json(company);
});

router.post("/company", (req, res) => {
  Company.create(req.body);
  console.log("Compania guardada");
  res.redirect("/api/company");
});

//CompanyAdmin
router.get("/companyAdmin", async (req, res) => {
  const companyAdmin = await CompanyAdmin.find();
  res.json(companyAdmin);
});

router.post("/companyAdmin", (req, res) => {
  CompanyAdmin.create(req.body);
  console.log("CompanyAdmin guardado");
  res.redirect("/api/companyAdmin");
});

//CarRental
router.get("/carRental", async (req, res) => {
  const carRental = await CarRental.find();
  res.json(carRental);
  res.redirect("/api/carRental");
});

router.post("/carRental", (req, res) => {
  CarRental.create(req.body);
  console.log("Rentadora guardada");
  res.redirect("/api/carRental");
});

//Commission
router.get("/commission", async (req, res) => {
  const commission = await Commission.find();
  res.json(commission);
});

router.post("/commission", (req, res) => {
  Commission.create(req.body);
  console.log("Comision guardada");
  res.redirect("/api/commission");
});

//Salesperson
router.get("/salesperson", async (req, res) => {
  const salesperson = await Salesperson.find();
  res.json(salesperson);
});

router.post("/salesperson", (req, res) => {
  Salesperson.create(req.body);
  console.log("Vendedor guardado");
  res.redirect("/api/salesperson");
});

//Booking
router.get("/booking", async (req, res) => {
  const booking = await Booking.find();
  res.json(booking);
});

router.post("/booking", (req, res) => {
  Booking.create(req.body);
  console.log("Reserva guardada");
  res.redirect("/api/booking");
});

module.exports = router;
