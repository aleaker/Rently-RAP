const router = require("express").Router();
const tokenRouter = require('./tokenRouter')
const searchCarsRouter = require('./searchCars')
const registerRentalRouter = require('./registerRental')


router.use('/token', tokenRouter)
router.use('/searchcars', searchCarsRouter)
router.use('/registerRental', registerRentalRouter)



module.exports = router;
