const router = require("express").Router();
const tokenRouter = require('./tokenRouter')
const searchCarsRouter = require('./searchCars')


router.use('/token', tokenRouter)
router.use('/searchcars', searchCarsRouter)



module.exports = router;
