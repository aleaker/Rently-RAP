const router = require("express").Router();
const User = require("../models/User");
const Company = require("../models/Company");
const Commission = require("../models/Commission");

// router.post('/', (req, res)=>{
//     let newUser = req.body.users
//     let newCompany = req.body.Company

//     Commision.create(newCompany.CommissionScheme)
//     .then(created =>{
//         console.log('soy yo', created)
//         newCompany.CommissionScheme = created._id;
//         newUser[0].Company = created._id
//         return Company.create(newCompany)
//     })
//     .then((e)=> {
//         console.log('este es el usuario a crear', newUser)
//         return User.create(newUser[0])})
//     .then((e)=>console.log('Empresa Creada sin Errores', e))
//     .catch(err=>console.log(err))

// })

router.post("/", (req, res) => {
  let newUser = req.body.users;
  let newCompany = req.body.Company;
  let newCommision = req.body.Commission;
  let CompanyID
  let Commision = []
  console.log('hola', newCommision);
  Company.create(newCompany)
    .then(created => {  
      console.log("Acabo de crear una compania");
      newCommision.map(el=>el['Company'] = created._id);
      newUser[0].Company = created._id;
      console.log('Chauuu', newCommision);
      CompanyID = created._id;
      return Commission.create(newCommision);
    })
    .then(e => {
      console.log("esta es la compania creada ", e);
      e.map(el=> {Commision.push(el._id)
      console.log('Este es el array de comisiones', Commision)
      })
      return User.create(newUser[0]);
    })
    .then(() => {
      Commision.map(com=>{Company.findByIdAndUpdate(CompanyID, {"$push":{"CommissionScheme": com }}).then(e=>console.log(e))})
      
      return null;
    })
    .then(()=> Company.findById(CompanyID))
    .then((e)=> console.log(e))
    .catch(err => console.log(err));
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
