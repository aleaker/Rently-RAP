const router = require("express").Router()
const User = require("../models/Users");
const Company = require('../models/Company')
const Commision = require('../models/Commission')

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

router.post('/', (req, res)=>{
    let newUser = req.body.users
    let newCompany = req.body.Company
    let newCommision = req.body.Commission
    let CompanyID
    console.log(newCommision)
    Company.create(newCompany)
    .then(created=>{
        console.log('Acabo de crear una compania')
        newCommision['Company'] = created._id;
        newUser[0].Company = created._id;
        console.log(newUser[0])
        CompanyID = created._id;
        return Commision.create(newCommision)
    })
    .then((e)=>{
        console.log('esta es la compania creada ', e)
        return User.create(newUser[0])
    })
    .then(()=>{ 
        console.log('Acabo de crear un usuario (soy un kapo)')
        Company.findByIdAndUpdate(CompanyID, {CommisionScheme: CompanyID })})
    .catch(err=>console.log(err))
})

  
module.exports = router;