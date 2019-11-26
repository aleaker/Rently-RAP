const mongoose = require("../config/db");

const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const RentlyAdmin = new Schema({
  Email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  Password: { type: String }
});

RentlyAdmin.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

RentlyAdmin.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("RentlyAdmin", RentlyAdmin);
