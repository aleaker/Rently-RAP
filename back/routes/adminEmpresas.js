const router = require("express").Router();
const Comission = require("../models/Commission");

router.post("/add/comissions", (req, res) => {
  Comission.create(req.body).then(data => res.send(data));
});

router.put("/comissions/edit/:id", (req, res) => {
  Comission.update({ _id: req.params.id }, { $set: req.body }).then(data =>
    res.send(data)
  );
});

router.get("/comissions/edit/:id", (req, res) => {
  Comission.find({ _id: req.params.id }).then(comission => res.send(comission));
});

module.exports = router;
