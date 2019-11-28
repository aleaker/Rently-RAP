const router = require("express").Router();
const passport = require("../config/passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.status(200).send(req.user);
});

router.post("/logout", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    res.sendStatus(200);
  }
});
module.exports = router;
