const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");
const registerRentalRouter = require("./registerRental");
const Company = require("../models/Company");
const CarRental = require("../models/CarRental");
const CompanyAdmin = require("../models/CompanyAdmin");
const Commission = require("../models/Commission");
const Salesperson = require("../models/Salesperson");
router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/registerRental", registerRentalRouter);

router.post("/rently", (req, res) => {
  const rentlyAdmin = new RentlyAdmin(req.body);
  rentlyAdmin.save().then(console.log("RentlyAdmin guardado"));
});

router.post("/company", (req, res) => {
  const newcompany = new Company(req.body);
  newcompany.save().then(console.log("Compania guardada"));
});

router.post("/companyAdmin", (req, res) => {
  const newcompanyadmin = new CompanyAdmin(req.body);
  newcompanyadmin.save().then(console.log("CompanyAdmin guardado"));
});

router.post("/carRental", (req, res) => {
  const newrentadora = new CarRental(req.body);
  newrentadora.save().then(console.log("Rentadora guardada"));
});

router.post("/commission", (req, res) => {
  const newcommission = new Commission(req.body);
  newcommission.save().then(console.log("Comision guardada"));
});

router.post("/salesperson", (req, res) => {
  const newsalesperson = new Salesperson(req.body);
  newsalesperson.save().then(console.log("Vendedor guardado"));
});

/*router.post("/company", async (req, res) => {
  const {
    CompanyName,
    Description,
    Address,
    Country,
    Telephone,
    MainContact,
    Email,
    BankAccountInfo,
    CommissionScheme
  } = req.body;
  //voy a recibir por req.body todas estas cosas
  const newcompany = new Company({
    CompanyName,
    Description,
    Address,
    Country,
    Telephone,
    MainContact,
    Email,
    BankAccountInfo,
    CommissionScheme
  });
  //con eso voy a crear una nueva compania usando el modelo de Company
  await newcompany.save();
  // con .save guardo esa new company en la base de datos
  res.json({ status: "Company Saved" });
  //envio un json q me dice q se guardo
});

router.post("/companyAdmin", async (req, res) => {
  const { Email, Active, Password, Company } = req.body;
  //voy a recibir por req.body todas estas cosas
  const newcompanyadmin = new CompanyAdmin({
    Email,
    Active,
    Password,
    Company
  });
  //con eso voy a crear un nuevo company admin usando el modelo de CompanyAdmin
  await newcompanyadmin.save();
  // con .save guardo ese new company admin en la base de datos
  res.json({ status: "CompanyAdmin Saved" });
  //envio un json q me dice q se guardo
});

router.post("/commission", (req, res) => {});

router.post("/carRental", (req, resp) => {
  CarRental.create(req.body);
});

router.post("/salesperson", (req, res) => {});

router.post("/booking", (req, res) => {});

router.use("/token", tokenRouter);

*/

module.exports = router;
