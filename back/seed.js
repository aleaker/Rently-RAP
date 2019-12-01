const User = require("../back/models/User");

const user = new User({
  UserType: "rentlyadmin",
  Email: "adminis@rently.com",
  Password: "123",
  FirstName: "rently",
  LastName: "admin",
  Telephone: "1136363636"
}).save();
