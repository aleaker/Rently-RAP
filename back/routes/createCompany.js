const router = require("express").Router();
const User = require("../models/User");
const Company = require("../models/Company");
const Commision = require("../models/Commission");
var nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  let newUser = req.body.users;
  let newCompany = req.body.Company;
  let newCommision = req.body.Commission;
  let CompanyID;
  console.log(newCommision);
  Company.create(newCompany)
    .then(created => {
      console.log("Acabo de crear una compania");
      newCommision["Company"] = created._id;
      newUser[0].Company = created._id;
      console.log(newUser[0]);
      CompanyID = created._id;
      return Commision.create(newCommision);
    })
    .then(e => {
      console.log("esta es la compania creada ", e);
      return User.create(newUser[0]);
    })
    .then(User => {
      console.log("Acabo de crear un usuario", User);

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });

      let mailOptions = {
        from: "raprentlytesting@gmail.com",
        to: User.Email,
        subject: "Rently affiliate program",
        text: `Thanks for joining the Rently affiliate program, you can access the plataform with this info:
        email: ${User.Email}
        password: "admin"
        `
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      Company.findByIdAndUpdate(CompanyID, { CommisionScheme: CompanyID });
    })
    .catch(err => console.log(err));
});

module.exports = router;
