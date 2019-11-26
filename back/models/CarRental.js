const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const CarRental = new Schema({
  Active: { type: Boolean, default: true },
  Name: { type: String },
  Logo: { type: String },
  Url: { type: String }, //viene de la api
  User: { type: String }, //viene de la api
  Password: { type: String }, //viene de la api
  MainContact: {
    FirstName: { type: String },
    LastName: { type: String },
    Email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    }
  },
  CommissionScheme: { type: Schema.Types.ObjectId, ref: "Commission" }
});

CarRental.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

CarRental.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("CarRental", CarRental);
