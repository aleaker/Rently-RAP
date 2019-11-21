const mongoose = require(mongoose);
const { Schema } = require(mongoose);

export const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Company = new Schema({
  companyName: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  telephone: { type: String, required: true },
  mainContact: {
    firstName: { type: String },
    lastName: { type: String },
    idType: { type: String, required: true },
    idNum: { type: String, required: true },
    email: {
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
  bankAccountInfo: {
    bank: { type: String },
    accountType: { type: String },
    accountNumber: { type: String },
    currency: { type: String },
    country: { type: String },
    swiffCode: { type: String }
  },
  commissionScheme: [{ type: Schema.Types.ObjectId, ref: "Commission" }]
});

module.exports = mongoose.model("Company", Company);
