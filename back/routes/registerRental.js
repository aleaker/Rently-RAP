const router = require("express").Router();
const CarRental = require("../models/CarRental");

router.post("/", (req, resp) => {
  console.log(req.body)
  CarRental.create(req.body)
  .then(res=>res.send("hola"))
});

module.exports = router;
