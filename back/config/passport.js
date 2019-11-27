const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(inputEmail, inputPassword, done) {
      //   User.findOne({ where: { email: inputEmail } }) // searching for the User
      //     .then(user => {
      //       if (!user) {
      //         return done(null, false, { message: "Incorrect username." });
      //       }
      //       if (!user.validPassword(inputPassword)) {
      //         return done(null, false, { message: "Incorrect password." });
      //       }
      //       return done(null, user); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
      //     })
      //     .catch(done); // this is returning done(error)
    }
  )
);
// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});
