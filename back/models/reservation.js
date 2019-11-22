const mongoose = require(mongoose);
const { Schema } = require(mongoose);
import { validateEmail } from "./company";

const Reservation = new Schema({
  //api: {id_reserva, precio-reserva, categoria, currentStatus}
  carRental: { type: Schema.Types.ObjectId, ref: "CarRental" },
  customerData: {
    firstName: { type: String },
    lastName: { type: String },
    telephone: { type: String, required: true },
    email: {
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
  salesPerson: { type: Schema.Types.ObjectId, ref: "SalesPerson" },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  SalesPersonCommission: { type: Schema.Types.ObjectId, ref: "Commission" }
  //comision de la empresa ? comision de la rentadora ???
});

module.exports = mongoose.model("Reservation", Reservation);
