const mongoose = require("../config/db");
const { Schema } = require("mongoose");

const Commission = new Schema({
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  from: { type: Number },
  to: { type: Number },
  commissionPercentage: { type: Number },
  fromDate: { type: Date },
  toDate: { type: Date },
  type: { type: String }
});

module.exports = mongoose.model("Commission", Commission);
