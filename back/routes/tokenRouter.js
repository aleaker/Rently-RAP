const router = require('express').Router()
var cors = require('cors')
const request = require('request');
 
const {AUTH_URL, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET} = process.env

router.get('/get', cors(), (req, res)=>{


    return new Promise(resolve=>{request.post(AUTH_URL,{form:{
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET

      }}, (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        resolve(body)

})}).then(auth_body=>JSON.parse(auth_body)['access_token'])
.then(access_token=> {
    const options =  {
        uri: 'https://demo.rently.com.ar/api/places',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${access_token}`}
      }
    return options })
.then(options=>request(options,  (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)}
    
    ))

})




module.exports = router