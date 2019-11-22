const mongoose = require("mongoose");
const { Schema } = mongoose;
import { validateEmail } from "./company";

const CarRental = new Schema({
  name: { type: String },
  logo: { type: String },
  //api: { url, usuario y password ??? }
  mainContact: {
    firstName: { type: String },
    lastName: { type: String },
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
    }
  },
  commissionScheme: { type: Schema.Types.ObjectId, ref: "Commission" }
});

module.exports = mongoose.model("CarRental", CarRental);
