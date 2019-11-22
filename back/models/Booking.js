const mongoose = require(mongoose);
const { Schema } = require(mongoose);
import { validateEmail } from "./Company";

const Booking = new Schema({
  BookingId: { type: Number, required: true /*viene de la api*/ },
  CarRental: { type: Schema.Types.ObjectId, ref: "CarRental" },
  CustomerData: {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Telephone: { type: String, required: true },
    Email: {
      type: String,
      trim: true,
      lowercase: true,
      required: "Email address is required",
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
  FromDate: { type: Date, required: true },
  ToDate: { type: Date, required: true },
  Pickup: { type: String, required: true },
  Dropoff: { type: String, required: true },
  Price: { type: Number, required: true }
});

module.exports = mongoose.model("Booking", Booking);