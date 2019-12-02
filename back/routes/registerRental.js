const router = require("express").Router();
const CarRental = require("../models/CarRental");
const Commission = require ("../models/Commission")

router.post("/", (req, resp) => {
  Commission.create(req.body.CommissionScheme[0]) //creo un esquema de comisiones
  .then(createdCommission => {
    let obj = req.body;                        //Guardo la data de rentadora en un obj
    obj.CommissionScheme = createdCommission._id; //le agego el id del esquema creado a ese obj
    return CarRental.create(obj)})                
    .then(createdCarRental=>console.log("createdCarRental",createdCarRental))
    .catch(err => console.log("Error: ",err))
});

router.get("/",  (req, res) => {
    CarRental.find()
    .then(carRentals=>res.json(carRentals))
   .catch (err=>
    console.log(err))
  }
);


module.exports = router;

