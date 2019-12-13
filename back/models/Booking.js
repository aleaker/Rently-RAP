const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Booking = new Schema({
  Status: { type: String },
  BookingId: { type: Number },
  CarRental: { type: Schema.Types.ObjectId, ref: "CarRental" },
  CustomerData: {
    FirstName: { type: String },
    LastName: { type: String },
    Telephone: { type: String },
    DocumentId: { type: String },
    Email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    }
  },
  Salesperson: { type: Schema.Types.ObjectId, ref: "User" },
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  // SalespersonCommissionAmount: {
  //   type: Number
  // },
  // CompanyCommissionAmount: { type: Number },
  // RentlyCommissionAmount: { type: Number },
  FromDate: { type: Date },
  ToDate: { type: Date },
  Pickup: { type: String },
  Notes: { type: String },
  Price: { type: Number }
});

module.exports = mongoose.model("Booking", Booking);
