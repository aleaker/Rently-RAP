const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const Commission = new Schema({
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  Name: {type: String},
  From: { type: Number },
  To: { type: Number },
  CommissionPercentage: { type: Number },
  FromDate: { type: Date },
  ToDate: { type: Date },
  Type: { type: String }
});

module.exports = mongoose.model("Commission", Commission);
