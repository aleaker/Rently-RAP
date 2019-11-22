const router = require("express").Router();

const Booking = require("../models/Booking");
const Commission = require("../models/Commission");
const Company = require("../models/Company");
const CompanyAdmin = require("../models/CompanyAdmin");
const RentlyAdmin = require("../models/RentlyAdmin");
const Salesperson = require("../models/Salesperson");

router.post("/api/rently", (req, res) => {
  console.log("Entro a api/rently");
  var rentlyAdmin = new RentlyAdmin();
  rentlyAdmin.Username = req.body.Username;
  rentlyAdmin.Password = rentlyAdmin.encryptPassword(req.body.Password);
  console.log("Creando el Rently Admmin", rentlyAdmin);
  rentlyAdmin
    .save()
    .then(rentlyAdmin => res.send(rentlyAdmin))
    .then(console.log("RentlyAdmin guardado"));
});

module.exports = router;
