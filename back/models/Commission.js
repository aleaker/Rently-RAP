const mongoose = require("../config/db");
const { Schema } = mongoose;

const Commission = new Schema({
  Name: {type: String},
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  From: { type: Number },
  To: { type: Number },
  CommissionPercentage: { type: Number },
  FromDate: { type: Date },
  ToDate: { type: Date },
  Type: { type: String }
});

module.exports = mongoose.model("Commission", Commission);
