const mongoose = require(mongoose);
const { Schema } = require(mongoose);
const bcrypt = require("bcrypt-nodejs");
import { validateEmail } from "./company";

const SalesPerson = new Schema({
  email: {
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
  password: { type: String, required: true, default: "salesperson" },
  firstName: { type: String },
  lastName: { type: String },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  telephone: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png"
  },
  notes: { type: String, required: false },
  commissionScheme: { type: Schema.Types.ObjectId, ref: "Commission" }
});

SalesPerson.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

SalesPerson.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("SalesPerson", SalesPerson);
