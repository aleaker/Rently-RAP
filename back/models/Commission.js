const mongoose = require("mongoose");
const { Schema } = mongoose;

const Commission = new Schema({
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  From: { type: Number },
  To: { type: Number },
  CommissionPercentage: { type: Number },
  FromDate: { type: Date },
  ToDate: { type: Date },
  Type: { type: String }
});

module.exports = mongoose.model("Commission", Commission);
