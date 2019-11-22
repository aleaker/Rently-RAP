const router = require("express").Router();
const tokenRouter = require("./tokenRouter");
const RentlyAdmin = require("../models/rentlyAdmin");
router.get("/", (req, res) => {
  console.log("Holaaaaaa Idiotas");
});

router.post("/rently", (req, res) => {
  console.log("Entro a /rently", req.body);
  var rentlyAdmin = new RentlyAdmin({
    username: "hanoi",
    password: "hanoipassword"
  });

  console.log("Creando el Rently Admmin", rentlyAdmin);
  rentlyAdmin
    .save()
    .then(rentlyAdmin => res.send(rentlyAdmin))
    .then(console.log("RentlyAdmin guardado"));
});

router.use("/token", tokenRouter);

module.exports = router;
