const router = require("express").Router();
const Comission = require("../models/Commission");

router.post("/add/comissions", (req, res) => {
  Comission.create(req.body).then(data => res.send(data));
});

module.exports = router;
