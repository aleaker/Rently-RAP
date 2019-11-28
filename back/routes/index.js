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
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

//VER UN USER POR SU ID: GET http://localhost:3000/api/user/:id
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

//CREAR UN USER : POST http://localhost:3000/api/user
router.post("/user", (req, res) => {
  try {
    User.create(req.body);
    console.log("User creado");
    res.json({ status: "user created" });
  } catch (err) {
    console.log(err);
  }
});

//ACTUALIZAR DATA DE UN USER: PUT http://localhost:3000/api/user/:id
router.put("/user/:id", async (req, res) => {
  try {
    const user = req.body;
    await User.findByIdAndUpdate(req.params.id, user);
    res.json({ status: "user updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR UN USUARIO POR SU ID: DELETE http://localhost:3000/api/user/:id
router.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "User deleted" });
  } catch (err) {
    console.log(err);
  }
});
//------------------------------------------------

//Company

//VER TODAS LAS EMPRESAS: GET http://localhost:3000/api/company
router.get("/company", async (req, res) => {
  try {
    const company = await Company.find();
    res.json(company);
  } catch (err) {
    console.log(err);
  }
});

//VER UNA EMPRESA POR SU ID: GET http://localhost:3000/api/company/:id
router.get("/company/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    console.log(err);
  }
});

//CREAR UNA EMPRESA: POST http://localhost:3000/api/company
router.post("/company", (req, res) => {
  try {
    Company.create(req.body);
    console.log("Compania guardada");
    res.json({ status: "Company created" });
  } catch (err) {
    console.log(err);
  }
});

//ACTUALIZAR DATA DE UNA EMPRESA: PUT http://localhost:3000/api/company/:id
router.put("/company/:id", async (req, res) => {
  try {
    const company = req.body;
    await Company.findByIdAndUpdate(req.params.id, company);
    res.json({ status: "Company updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR UNA EMPRESA POR SU ID: DELETE http://localhost:3000/api/company/:id
router.delete("/company/:id", async (req, res) => {
  try {
    await Company.findByIdAndRemove(req.params.id);
    res.json({ status: "Company deleted" });
  } catch (err) {
    console.log(err);
  }
});

//----------------------------------------------

//CarRental

//VER TODAS LAS RENTADORAS: GET http://localhost:3000/api/carRental
router.get("/carRental", async (req, res) => {
  try {
    const carRental = await CarRental.find();
    res.json(carRental);
    res.redirect("/api/carRental");
  } catch (err) {
    console.log(err);
  }
});

//VER UNA RENTADORA POR SU ID: GET http://localhost:3000/api/carRental/:id ARREGLAR *
router.get("/carRental/:id", async (req, res) => {
  try {
    const carRental = await CarRental.findById(req.params.id);
    res.json(carRental);
  } catch (err) {
    console.log(err);
  }
});

//CREAR UNA RENTADORA: POST http://localhost:3000/api/carRental
router.post("/carRental", (req, res) => {
  try {
    CarRental.create(req.body);
    console.log("Rentadora guardada");
    res.redirect("/api/carRental");
  } catch (err) {
    console.log(err);
  }
});

//ACTUALIZAR DATA DE UNA RENTADORA: PUT http://localhost:3000/api/carRental/:id
router.put("/carRental/:id", async (req, res) => {
  try {
    const carRental = req.body;
    await CarRental.findByIdAndUpdate(req.params.id, carRental);
    res.json({ status: "CarRental updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR UNA RENTADORA POR SU ID: DELETE http://localhost:3000/api/carRental/:id
router.delete("/carRental/:id", async (req, res) => {
  try {
    await CarRental.findByIdAndRemove(req.params.id);
    res.json({ status: "CarRental deleted" });
  } catch (err) {
    console.log(err);
  }
});

//----------------------------------------

//Commission

//VER TODAS LAS COMISIONES: GET http://localhost:3000/api/commission
router.get("/commission", async (req, res) => {
  try {
    const commission = await Commission.find();
    res.json(commission);
  } catch (err) {
    console.log(err);
  }
});

//VER UNA COMISION POR SU ID: GET http://localhost:3000/api/commission/:id
router.get("/commission/:id", async (req, res) => {
  try {
    const user = await Commission.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

//CREAR UNA COMISION: POST http://localhost:3000/api/commission
router.post("/commission", (req, res) => {
  try {
    Commission.create(req.body);
    console.log("Comision guardada");
    res.redirect("/api/commission");
  } catch (err) {
    console.log(err);
  }
});

//ACTUALIZAR DATA DE UNA COMISION: PUT http://localhost:3000/api/commission/:id
router.put("/commission/:id", async (req, res) => {
  try {
    const commission = req.body;
    await Commission.findByIdAndUpdate(req.params.id, commission);
    res.json({ status: "Commission updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR UNA COMISION POR SU ID: DELETE http://localhost:3000/api/commission/:id
router.delete("/commission/:id", async (req, res) => {
  try {
    await CarRental.findByIdAndRemove(req.params.id);
    res.json({ status: "Commission deleted" });
  } catch (err) {
    console.log(err);
  }
});

//------------------------------------------

//Booking

//VER TODAS LAS RESERVAS: GET http://localhost:3000/api/booking
router.get("/booking", async (req, res) => {
  try {
    const booking = await Booking.find();
    res.json(booking);
  } catch (err) {
    console.log(err);
  }
});

//VER UNA RESERVA POR SU ID: GET http://localhost:3000/api/booking/:id
router.get("/booking/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
  } catch (err) {
    console.log(err);
  }
});

//CREAR UNA RESERVA: POST http://localhost:3000/api/booking
router.post("/booking", (req, res) => {
  try {
    Booking.create(req.body);
    console.log("Reserva guardada");
    res.redirect("/api/booking");
  } catch (err) {
    console.log(err);
  }
});

//ACTUALIZAR DATA DE UNA RESERVA: PUT http://localhost:3000/api/booking/:id
router.put("/booking/:id", async (req, res) => {
  try {
    const booking = req.body;
    await Booking.findByIdAndUpdate(req.params.id, booking);
    res.json({ status: "Booking updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR UNA RESERVA POR SU ID: DELETE http://localhost:3000/api/booking/:id
router.delete("/booking/:id", async (req, res) => {
  try {
    await Booking.findByIdAndRemove(req.params.id);
    res.json({ status: "Booking deleted" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
