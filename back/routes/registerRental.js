const router = require("express").Router();
const CarRental = require("../models/CarRental");
const Commission = require ("../models/Commission")

router.post("/", (req, resp) => {
  Commission.create(req.body.CommissionScheme)
  .then(createdCommission => {
    let obj = req.body;
    obj.CommissionScheme = createdCommission._id;
    return CarRental.create(obj)})
    .then(createdCarRental=>console.log("createdCarRental",createdCarRental))

  .catch(err => console.log("Error: ",err))
});



  //     CommissionScheme: {
  //       ...prevState.CommissionScheme,
  //       FromDate: fromdate
  //     }

module.exports = router;
