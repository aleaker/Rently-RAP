const router = require("express").Router();
const CarRental = require("../models/CarRental");

router.post("/", (req, resp) => {
  CarRental.create(req.body);
});

module.exports = router;
