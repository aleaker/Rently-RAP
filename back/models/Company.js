const mongoose = require("../config/db");
const { Schema } = mongoose;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Company = new Schema({
  Active: { type: Boolean, default: true },
  CompanyName: { type: String },
  Description: { type: String },
  Address: { type: String },
  Country: { type: String },
  Telephone: { type: String },
  MainContact: {
    FirstName: { type: String },
    LastName: { type: String },
    IdType: { type: String },
    IdNum: { type: String },
    Email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    }
  },
  BankAccountInfo: {
    Bank: { type: String },
    AccountType: { type: String },
    AccountNumber: { type: String },
    Currency: { type: String },
    Country: { type: String },
    SwiffCode: { type: String }
  },
  CommissionScheme: [{ type: Schema.Types.ObjectId, ref: "Commission" }]
});

module.exports = mongoose.model("Company", Company);
