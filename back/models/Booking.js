const mongoose = require("../config/db");
const { Schema } = mongoose;

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
  SalesPerson: { type: Schema.Types.ObjectId, ref: "SalesPerson" },
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  SalesPersonCommissionAmount: {
    type: Schema.Types.ObjectId,
    ref: "Commission"
  },
  CompanyCommissionAmount: { type: Schema.Types.ObjectId, ref: "Commission" }, //monto a cobrar x la empresa
  RentlyCommissionAmount: { type: Schema.Types.ObjectId, ref: "Commission" }, //monto a comisionar x la plataforma
  FromDate: { type: Date },
  ToDate: { type: Date },
  Pickup: { type: String },
  Dropoff: { type: String },
  Price: { type: Number }
});

module.exports = mongoose.model("Booking", Booking);
