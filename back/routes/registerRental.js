const router = require("express").Router();
const carRental = require("../models/carRental");

router.post("/", (req, resp) => {
  carRental.create(req.body);
});

module.exports = router;
