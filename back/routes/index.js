const router = require("express").Router();
const tokenRouter = require('./tokenRouter')

router.get('/', (req, res)=>{
    console.log('Holaaaaaa Idiotas')
})
router.use('/token', tokenRouter)



module.exports = router;
