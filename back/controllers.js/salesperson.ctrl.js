const User = require("../models/User");

salespersonCtrl = {};

salespersonCtrl.getSalespersons = async (req, res) => {
  const salespersons = await User.find({ UserType: "Vendedor" });
  res.json(salespersons);
};
