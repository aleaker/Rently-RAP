const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const searchCarsRouter = require("./searchCars");
const registerRentalRouter = require("./registerRental");
const Company = require("../models/Company");
router.use("/token", tokenRouter);
router.use("/searchcars", searchCarsRouter);
router.use("/registerRental", registerRentalRouter);

router.post("/rently", (req, res) => {
  const { Username, Password } = req.body;
  console.log("req.body", req.body);
  console.log("Entro a /rently");
  var rentlyAdmin = new RentlyAdmin({ Username, Password });
  rentlyAdmin.Username = req.body.Username;
  rentlyAdmin.Password = rentlyAdmin.encryptPassword(req.body.Password);
  console.log("Creando el Rently Admmin", rentlyAdmin);
  rentlyAdmin
    .save()
    .then(rentlyAdmin => res.send(rentlyAdmin))
    .then(console.log("RentlyAdmin guardado, ESTE ES EL REQ.BODY:", req.body));
});
router.post("/company", async (req, res) => {
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

router.post("/companyAdmin", (req, res) => {});

router.post("/commission", (req, res) => {});

router.post("/carRental", (req, res) => {});

router.post("/salesperson", (req, res) => {});

router.post("/booking", (req, res) => {});

router.use("/token", tokenRouter);

module.exports = router;
