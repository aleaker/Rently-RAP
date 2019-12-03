const mongoose = require("../config/db");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const SALT_WORK_FACTOR = 10;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
  Active: { type: Boolean, default: true },
  UserType: { type: String },
  Email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  Password: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  Telephone: { type: String, required: true },
  Photo: {
    type: String,
    default:
      "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png"
  },
  Notes: { type: String },
  CommissionScheme: [{ type: Schema.Types.ObjectId, ref: "Commission" }]
});

User.pre("save", function(next) {
  if (!this.isModified("Password")) {
    return next();
  }
  this.Password = bcrypt.hashSync(this.Password, bcrypt.genSaltSync(10));
  next();
});

User.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
};

module.exports = mongoose.model("User", User);
