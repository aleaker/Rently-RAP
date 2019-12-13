const router = require("express").Router();
const User = require("../models/User");
const Company = require("../models/Company");
const Commission = require("../models/Commission");
const nodemailer = require("nodemailer");


router.post("/", (req, res) => {
  let newUser = req.body.users;
  let newCompany = req.body.Company;
  let newCommision = req.body.Commission;
  let CompanyID
  console.log(newUser)
  let Commision = []
  console.log('hola', newCommision);
  Company.create(newCompany)
    .then(created => {  
      console.log("Acabo de crear una compania");
      newCommision.map(el=>el['Company'] = created._id);
      newUser[0].Company = created._id;
      console.log('Chauuu', newCommision);
      CompanyID = created._id;
      console.log(newUser[0], 'Soy el usuario que voy a crear')
      return Commission.create(newCommision);
    })
    .then(e => {
      console.log("esta es la compania creada ", e);
      e.map(el=> {Commision.push(el._id)
      console.log('Este es el array de comisiones', Commision)
      })
      return User.create(newUser[0]);
    })
    .then((user) => {
      console.log("Acabo de crear un usuario", user);
      Commision.map(com=>{Company.findByIdAndUpdate(CompanyID, {"$push":{"CommissionScheme": com }}).then(e=>console.log(e))})
      
      return user;})

    .then(User => {
      

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
    .then(()=> Company.findById(CompanyID))
    .then((e)=> {console.log(e)
                  res.send('Ok').status(200)})
    .catch(err => {console.log(err)
                  res.send(err).status(500)
    });
});

router.post('/get', (req, res)=>{
  let company = {}
  console.log(req.body)
  Company.findById(req.body.id)
  .then(e=> company['Company'] = e)
  .then(()=>Commission.find({'Company':req.body.id}))
  .then((e=>company['Commission'] = e))
  .then(()=> User.find({'Company': req.body.id}))
  .then(e=> company['User'] = e)
  .then(()=>res.send(company))
})

router.post('/update', (req, res)=>{
  let newUser = req.body.users;
  let newCompany = req.body.Company;
  let newCommision = req.body.Commission;
  let CompanyID = req.body.id
  let UserID = req.body.userId
  console.log(req.body)

  Company.findByIdAndUpdate(CompanyID, newCompany)
  // .then(()=>User.findByIdAndUpdate(UserID, newUser))
  .then(()=> res.send('Ok').status(201))
  .catch(e=> {
    console.log(e)
    res.send('Ha habido un error').status(500)})
})

module.exports = router;
