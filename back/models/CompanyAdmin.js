const mongoose = require("../config/db");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const CompanyAdmin = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Active: { type: Boolean, default: true },
  Email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  Password: { type: String, default: "admin" },
  Company: { type: Schema.Types.ObjectId, ref: "Company" }
});

CompanyAdmin.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

CompanyAdmin.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("CompanyAdmin", CompanyAdmin);
