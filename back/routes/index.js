const router = require("express").Router();
const tokenRouter = require('./tokenRouter')
const searchCarsRouter = require('./searchCars')
const addRentalRouter = require('./addRental')


router.use('/token', tokenRouter)
router.use('/searchcars', searchCarsRouter)
router.use('/addRental', addRentalRouter)



module.exports = router;
