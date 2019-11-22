const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const RentlyAdmin = require("../models/RentlyAdmin");

router.get("/", (req, res) => {
  console.log("Holaaaaaa Idiotas");
});

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
router.post("/company", (req, res) => {});

router.post("/companyAdmin", (req, res) => {});

router.post("/commission", (req, res) => {});

router.post("/carRental", (req, res) => {});

router.post("/salesperson", (req, res) => {});

router.post("/booking", (req, res) => {});

router.use("/token", tokenRouter);

module.exports = router;
