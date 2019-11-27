const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");

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

//Users

//VER LOS USUARIOS: GET http://localhost:3000/api/users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//VER UN USER POR SU ID: GET http://localhost:3000/api/user/:id
router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

//CREAR UN USER : POST http://localhost:3000/api/user
router.post("/user", (req, res) => {
  User.create(req.body);
  console.log("User creado");
  res.redirect("/api/users");
});

//ACTUALIZAR DATA DE UN USER: PUT http://localhost:3000/api/user/:id
router.put("/user/:id", async (req, res) => {
  const user = req.body;
  await User.findByIdAndUpdate(req.params.id, user);
  res.json({ status: "user updated" });
});

//Borrar un usuario /* ARREGLAR
router.delete("user/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "user deleted" });
});

//------------------------------------------------

//Company
//
router.get("/company", async (req, res) => {
  const company = await Company.find();
  res.json(company);
});

router.post("/company", (req, res) => {
  Company.create(req.body);
  console.log("Compania guardada");
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
