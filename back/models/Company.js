const mongoose = require(mongoose);
const { Schema } = require(mongoose);

export const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Company = new Schema({
  CompanyName: { type: String, required: true },
  Description: { type: String, required: true },
  Address: { type: String, required: true },
  Country: { type: String, required: true },
  Telephone: { type: String, required: true },
  MainContact: {
    FirstName: { type: String, required: true },
    LastName: { type: String },
    required: true,
    IdType: { type: String, required: true },
    IdNum: { type: String, required: true },
    Email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
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
