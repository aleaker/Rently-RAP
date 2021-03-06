const router = require("express").Router();
const passport = require("../config/passport");

router.get("/", function(req, res, next) {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});
router.post("/login", passport.authenticate("local"), function(req, res) {
  res.status(200).send(req.user);
});

router.get("/logout", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    res.sendStatus(200);
  }
});
module.exports = router;
