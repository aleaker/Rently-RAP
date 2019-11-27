const router = require("express").Router();
const passport = require("passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("AQUIIII esta el user", req.isAuthenticated, req.body, req.user);
});

module.exports = router;
