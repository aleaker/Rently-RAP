const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");
const createCompanyRouter = require("./createCompany");
const userRouter = require("./user");
const adminEmpresasRouter = require("./adminEmpresas");
//Requiero los modelos
const rentalRouter = require("./rentalRouter");
const Company = require("../models/Company");
const CarRental = require("../models/CarRental");
const Commission = require("../models/Commission");
const Booking = require("../models/Booking");
const User = require("../models/User");
const coso = require("../coso");

router.use("/coso", coso);
router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/rentalRouter", rentalRouter);
router.use("/createCompany", createCompanyRouter);
router.use("/user", userRouter); //rutas del login and logout
router.use("/adminEmpresas", adminEmpresasRouter);

router.get("/coso", (req, res) => {
  return console.log(coso.cosoBooking());
});

// //COSO
// router.post("/", (req, res) => {
//   var newbooking = {
//     Status: "Pending",
//     BookingId: req.body.BookingId,
//     CarRental: req.body.CarRentalId,
//     CustomerData: {
//       FirstName: req.body.Name,
//       Telephone: req.body.CellPhone,
//       Email: req.body.EmailAddress,
//       DocumentId: req.body.DocumentId
//     },
//     FromDate: req.body.FromDate,
//     ToDate: req.body.ToDate,
//     Pickup: req.body.deliveryPlace,
//     Salesperson: req.body.User._id,
//     Company: req.body.Company._id,
//     Notes: req.body.Extra
//   };
//   try {
//     Booking.create(newbooking);
//     console.log("Reserva guardada");
//     res.redirect("/api/booking");
//   } catch (err) {
//     console.log(err);
//   }
// });

//RentlyAdmin
router.post("/rently", (req, resp) => {
  RentlyAdmin.create(req.body);
});

//VER TODOS LOS USERS
router.get("/users", (req, res) => {
  User.find().then(e => res.json(e));
});

//CREAR UN ADMN RENTLY
router.post("/rently", (req, res) => {
  RentlyAdmin.create(req.body);
  console.log("RentlyAdmin creado");
  res.redirect("/api/rently");
});

//VER TODOS LOS ADMINS-EMPRESA ACTIVOS
router.get("/companyAdmins", async (req, res) => {
  try {
    const admins = await User.find({
      UserType: "AdminEmpresa",
      Active: true
    });
    res.json(admins);
  } catch (err) {
    console.log(err);
  }
});

//GET 1 ADMIN-EMPRESA
router.get("/companyAdmin/:id", async (req, res) => {
  try {
    const admin = await User.findById(req.params.id);
    res.json(admin);
  } catch (err) {
    console.log(err);
  }
});

//EDIT 1 ADMIN-EMPRESA
router.put("/admin/edit/:id", async (req, res) => {
  try {
    const edit = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(edit);
  } catch (err) {
    console.log(err);
  }
});

//VER TODOS LOS VENDEDORES ACTIVOS
router.get("/salespeople", async (req, res) => {
  try {
    const salespersons = await User.find({
      UserType: "Vendedor",
      Active: true
    });
    res.json(salespersons);
  } catch (err) {
    console.log(err);
  }
});

//VER TODOS LOS VENDEDORES INACTIVOS
router.get("/salespeople/deactivated", async (req, res) => {
  try {
    const salespersons = await User.find({
      UserType: "Vendedor",
      Active: false
    });
    res.json(salespersons);
  } catch (err) {
    console.log(err);
  }
});

//CAMBIAR UN VENDEDOR A INACTIVO >>> PUT http://localhost:3000/api/salespeople/:id
router.put("/salespeople/:id", async (req, res) => {
  try {
    const change = { Active: false };
    const deleted = await User.findByIdAndUpdate(req.params.id, change);
    res.json(deleted);
  } catch (err) {
    console.log(err);
  }
});

//VER A UN VENDEDOR ESPECIFICO >>> GET http://localhost:3000/api/salesperson/:id
router.get("/salesperson/:id", async (req, res) => {
  try {
    const salesperson = await User.findById(req.params.id);
    res.json(salesperson);
  } catch (err) {
    console.log(err);
  }
});

//REACTIVAR UN VENDEDOR
router.put("/reactivate/:id", async (req, res) => {
  console.log("ENTRE A LA RUTA DEL BACK");
  try {
    const change = { Active: true };
    const nowactive = await User.findByIdAndUpdate(req.params.id, change);
    res.json(nowactive);
  } catch (err) {
    console.log(err);
  }
});

//EDITAR UN VENDEDOR
router.put("/salesperson/edit/:id", async (req, res) => {
  try {
    const edit = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(edit);
  } catch (err) {
    console.log(err);
  }
});

//VER LOS USUARIOS: GET http://localhost:3000/api/user
router.get("/user", async (req, res) => {
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
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.send("ERROR");
    });
});

//MODIFICAR UN USER: PUT http://localhost:3000/api/user/:id
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

//BORRAR TODOS LOS USUARIOS DELETE http://localhost:3000/api/deleteallusers
router.delete("/deleteallusers", async (req, res) => {
  try {
    await User.collection.drop();
    res.json({ status: "All users deleted" });
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

//VER TODAS LAS EMPRESAS ACTIVAS: GET http://localhost:3000/api/company/activeList
router.get("/company/activeList", async (req, res) => {
  try {
    const company = await Company.find({ Active: true });
    res.json(company);
  } catch (err) {
    console.log(err);
  }
});

//VER 1 EMPRESA POR SU ID: GET http://localhost:3000/api/company/:id
router.get("/company/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    console.log(err);
  }
});

//CREAR 1 EMPRESA: POST http://localhost:3000/api/company
router.post("/company", (req, res) => {
  try {
    Company.create(req.body);
    console.log("Compania guardada");
    res.json({ status: "Company created" });
  } catch (err) {
    console.log(err);
  }
});

//MODIFICAR 1 EMPRESA: PUT http://localhost:3000/api/company/:id
router.put("/company/:id", async (req, res) => {
  try {
    const company = req.body;
    await Company.findByIdAndUpdate(req.params.id, company);
    res.json({ status: "Company updated" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR 1 EMPRESA POR SU ID: DELETE http://localhost:3000/api/company/:id
router.delete("/company/:id", async (req, res) => {
  Company.updateOne(
    { _id: req.params.id },
    { $set: { Active: false } }
  ).then(company => res.json(company));
  /* .catch(err => console.log(err), res.send(401)); */
});

//BORRAR TODAS LAS EMPRESAS DELETE http://localhost:3000/api/deleteallcompanies
router.delete("/deleteallcompanies", async (req, res) => {
  try {
    await Company.collection.drop();
    res.json({ status: "All companies deleted" });
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
  } catch (err) {
    console.log(err);
  }
});

//VER UNA RENTADORA POR SU ID: GET http://localhost:3000/api/carRental/:id
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

// COMISSION SCHEME: 5ddd47172edd344b3422cbed
//CUANDO BORRAMOS UNA RENTADORA, QUEREMOS BORRAR SU ESQUEMA DE COMISION????
//MODIFICAR UNA RENTADORA: PUT http://localhost:3000/api/carRental/:id
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

//BORRAR TODAS LAS RENTADORAS DELETE http://localhost:3000/api/deleteallcarrentals
router.delete("/deleteallcarrentals", async (req, res) => {
  try {
    await CarRental.collection.drop();
    res.json({ status: "All CarRentals deleted" });
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
    const commission = await Commission.findById(req.params.id);
    res.json(commission);
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

//MODIFICAR UNA COMISION: PUT http://localhost:3000/api/commission/:id
router.put("/commission/:id", async (req, res) => {
  try {
    const commission = req.body;
    await Commission.findByIdAndUpdate(req.params.id, commission);
    res.json({ status: "Commission updated" });
  } catch (err) {
    console.log(err);
  }
});
router.get("/comisiones", async (req, res) => {
  function createData(
    Company,
    From,
    To,
    CommissionPercentage,
    FromDate,
    ToDate,
    Type
  ) {
    return { Company, From, To, CommissionPercentage, FromDate, ToDate, Type };
  }
  dataFalsa = [
    createData(
      "EMPRESAaaa A",
      10000,
      30000,
      15,
      "20 - 02 - 2020",
      "25 - 02 - 2020",
      1
    ),
    createData(
      "EMPRESAaaa B",
      10000,
      20000,
      15,
      "24 - 02 - 2020",
      "25 - 02 - 2020",
      1
    ),
    createData(
      "EMPRESA C",
      10000,
      50000,
      15,
      "18 - 02 - 2020",
      "25 - 02 - 2020",
      2
    ),
    createData(
      "EMPRESA D",
      10000,
      90000,
      15,
      "02 - 02 - 2020",
      "25 - 02 - 2020",
      4
    ),
    createData(
      "EMPRESA E",
      10000,
      70000,
      15,
      "15 - 01 - 2020",
      "25 - 02 - 2020",
      5
    ),
    createData(
      "EMPRESA F",
      10000,
      60000,
      4,
      "24 - 01 - 2020",
      "25 - 02 - 2020",
      6
    ),
    createData(
      "EMPRESA G",
      10000,
      90000,
      29,
      "22 - 01 - 2020",
      "25 - 02 - 2020",
      8
    ),
    createData(
      "EMPRESA H",
      10000,
      50000,
      19,
      "21 - 01 - 2020",
      "25 - 02 - 2020",
      2
    ),
    createData(
      "EMPRESA I",
      10000,
      50000,
      15,
      "03 - 01 - 2020",
      "25 - 02 - 2020",
      3
    ),
    createData(
      "EMPRESA J",
      10000,
      20000,
      12,
      "06 - 01 - 2020",
      "25 - 02 - 2020",
      1
    )
  ];
  res.send(dataFalsa);
  /*   const commission = await Commission.find();
  res.json(commission); */
});

//BORRAR UNA COMISION POR SU ID: DELETE http://localhost:3000/api/commission/:id
router.delete("/commission/:id", async (req, res) => {
  try {
    await Commission.findByIdAndRemove(req.params.id);
    res.json({ status: "Commission deleted" });
  } catch (err) {
    console.log(err);
  }
});

//BORRAR TODAS LAS COMISIONES DELETE http://localhost:3000/api/deleteallcommissions
router.delete("/deleteallcommissions", async (req, res) => {
  try {
    await Commission.collection.drop();
    res.json({ status: "All commissions deleted" });
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

//MODIFICAR DE UNA RESERVA: PUT http://localhost:3000/api/booking/:id
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

//BORRAR TODAS LAS RESERVAS: DELETE http://localhost:3000/api/deleteallbookings
router.delete("/deleteallbookings", async (req, res) => {
  try {
    await Booking.collection.drop();
    res.json({ status: "All bookings deleted" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
