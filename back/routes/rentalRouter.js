const router = require("express").Router();
const CarRental = require("../models/CarRental");
const Commission = require("../models/Commission");

router.post("/", (req, resp) => {
  Commission.create(req.body.CommissionScheme[0]) //creo un esquema de comisiones
    .then(createdCommission => {
      let obj = req.body; //Guardo la data de rentadora en un obj
      obj.CommissionScheme = createdCommission._id; //le agego el id del esquema creado a ese obj
      return CarRental.create(obj);
    })
    .then(createdCarRental => console.log("createdCarRental", createdCarRental))
    .catch(err => console.log("Error: ", err));
});

router.get("/", (req, res) => {
  CarRental.find({"Active":true})
    .then(carRentals => res.json(carRentals))
    .catch(err => console.log(err));
});

router.put("/deactivateRental/:id", (req, res) => {
  CarRental.update({_id:req.params.id},{"Active":false})
  .then(carRental=>carRental.update(carRental))
});

module.exports = router;
