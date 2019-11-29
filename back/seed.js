const User = require("../back/models/User");

const user = new User({
  UserType: "rentlyadmin",
  Email: "admin3@rently.com",
  Password: "123",
  FirstName: "rently",
  LastName: "rently",
  Telephone: "987654321"
}).save();
