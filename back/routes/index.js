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
  res.json({ status: "user created" });
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

//VER TODAS LAS EMPRESAS: GET http://localhost:3000/api/company
router.get("/company", async (req, res) => {
  const company = await Company.find();
  res.json(company);
});

//VER UNA EMPRESA POR SU ID: GET http://localhost:3000/api/company/:id
router.get("/company/:id", async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.json(company);
});

//CREAR UNA EMPRESA: POST http://localhost:3000/api/company
router.post("/company", (req, res) => {
  Company.create(req.body);
  console.log("Compania guardada");
  res.json({ status: "Company created" });
});

//ACTUALIZAR DATA DE UNA EMPRESA: PUT http://localhost:3000/api/company/:id
router.put("/company/:id", async (req, res) => {
  const company = req.body;
  await Company.findByIdAndUpdate(req.params.id, company);
  res.json({ status: "Company updated" });
});

//----------------------------------------------

//CarRental

//VER TODAS LAS RENTADORAS: GET http://localhost:3000/api/carRental
router.get("/carRental", async (req, res) => {
  const carRental = await CarRental.find();
  res.json(carRental);
  res.redirect("/api/carRental");
});

//VER UNA RENTADORA POR SU ID: GET http://localhost:3000/api/carRental/:id ARREGLAR *
router.get("/carRental/:id", async (req, res) => {
  const carRental = await CarRental.findById(req.params.id);
  res.json(carRental);
});

//CREAR UNA RENTADORA: POST http://localhost:3000/api/carRental
router.post("/carRental", (req, res) => {
  CarRental.create(req.body);
  console.log("Rentadora guardada");
  res.redirect("/api/carRental");
});

//ACTUALIZAR DATA DE UNA RENTADORA: PUT http://localhost:3000/api/carRental/:id
router.put("/carRental/:id", async (req, res) => {
  const carRental = req.body;
  await CarRental.findByIdAndUpdate(req.params.id, carRental);
  res.json({ status: "CarRental updated" });
});

//----------------------------------------

//Commission

//VER TODAS LAS COMISIONES: GET http://localhost:3000/api/commission
router.get("/commission", async (req, res) => {
  const commission = await Commission.find();
  res.json(commission);
});

//VER UNA COMISION POR SU ID: GET http://localhost:3000/api/commission/:id
router.get("/commission/:id", async (req, res) => {
  const user = await Commission.findById(req.params.id);
  res.json(user);
});

//CREAR UNA COMISION: POST http://localhost:3000/api/commission
router.post("/commission", (req, res) => {
  Commission.create(req.body);
  console.log("Comision guardada");
  res.redirect("/api/commission");
});

//ACTUALIZAR DATA DE UNA COMISION: PUT http://localhost:3000/api/commission/:id
router.put("/commission/:id", async (req, res) => {
  const commission = req.body;
  await Commission.findByIdAndUpdate(req.params.id, commission);
  res.json({ status: "Commission updated" });
});

//------------------------------------------

//Booking

//VER TODAS LAS RESERVAS: GET http://localhost:3000/api/booking
router.get("/booking", async (req, res) => {
  const booking = await Booking.find();
  res.json(booking);
});

//VER UNA RESERVA POR SU ID: GET http://localhost:3000/api/booking/:id
router.get("/booking/:id", async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.json(booking);
});

//CREAR UNA RESERVA: POST http://localhost:3000/api/booking
router.post("/booking", (req, res) => {
  Booking.create(req.body);
  console.log("Reserva guardada");
  res.redirect("/api/booking");
});

//ACTUALIZAR DATA DE UNA RESERVA: PUT http://localhost:3000/api/booking/:id
router.put("/booking/:id", async (req, res) => {
  const booking = req.body;
  await Booking.findByIdAndUpdate(req.params.id, booking);
  res.json({ status: "Booking updated" });
});

module.exports = router;
