const mongoose = require("../config/db");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const RentlyAdmin = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

RentlyAdmin.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

RentlyAdmin.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("RentlyAdmin", RentlyAdmin);
