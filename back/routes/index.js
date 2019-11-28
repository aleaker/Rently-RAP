const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");
const userRouter = require("./user");
//Requiero los modelos
const registerRentalRouter = require("./registerRental");
const User = require("../models/User");
const Company = require("../models/Company");
const CarRental = require("../models/CarRental");
const Commission = require("../models/Commission");
const Booking = require("../models/Booking");

router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/registerRental", registerRentalRouter);
router.use("/user", userRouter);
//RentlyAdmin
router.post("/rently", (req, resp) => {
  RentlyAdmin.create(req.body);
});

//Company
router.get("/company", async (req, res) => {
  const company = await Company.find();
  res.json(company);
});

router.post("/company", (req, res) => {
  Company.create(req.body);

  res.redirect("/api/company");
});

//CarRental
router.get("/carRental", async (req, res) => {
  const carRental = await CarRental.find();
  res.json(carRental);
  res.redirect("/api/carRental");
});

router.post("/carRental", (req, res) => {
  CarRental.create(req.body);

  res.redirect("/api/carRental");
});

//Commission
router.get("/commission", async (req, res) => {
  const commission = await Commission.find();
  res.json(commission);
});

router.post("/commission", (req, res) => {
  Commission.create(req.body);

  res.redirect("/api/commission");
});

//Booking
router.get("/booking", async (req, res) => {
  const booking = await Booking.find();
  res.json(booking);
});

router.post("/booking", (req, res) => {
  Booking.create(req.body);

  res.redirect("/api/booking");
});

module.exports = router;
