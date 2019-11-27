const mongoose = require("../config/db");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt-nodejs")
const SALT_WORK_FACTOR = 10;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
  Active: { type: Boolean, default: true },
  UserType: { type: String, required: true },
  Email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  Password: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Company: { type: Schema.Types.ObjectId, ref: "Company" },
  Telephone: { type: String, required: true },
  Photo: {
    type: String,
    default:
      "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png"
  },
  Notes: { type: String },
  CommissionScheme: [{ type: Schema.Types.ObjectId, ref: "Commission" }]
});

User.pre("save", function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("Password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.Password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.Password = hash;
      next();
    });
  });
});

User.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", User);
