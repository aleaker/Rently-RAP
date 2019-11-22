const mongoose = require(mongoose);
const { Schema } = require(mongoose);
const bcrypt = require("bcrypt-nodejs");
import { validateEmail } from "./company";

const Salesperson = new Schema({
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
  Password: { type: String, required: true, default: "salesperson" },
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
  CommissionScheme: { type: Schema.Types.ObjectId, ref: "Commission" }
});

Salesperson.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

Salesperson.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Salesperson", Salesperson);
