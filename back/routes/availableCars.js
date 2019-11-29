const router = require("express").Router()

const clientID = "rentlyweb";
const clientSecret = "9$3Gx#;6a8K!%AXB:+}rX^Ek%6:/{*_LvDJ6{n{G-&J;]5sA)$aXLP$@j1XaR>31";
const grant_type = "client_credentials"


// Declare the redirect route
router.get('/oauth/token', (req, res) => {
    // The req.query object has the query params that
    // were sent to this route. We want the `code` param
    const requestToken = req.query.code
    axios({
      // make a POST request
      method: 'post',
      // to the Github authentication API, with the client ID, client secret
      // and request token
      url:  `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      // Set the content type header, so that we get the response in JSOn
      headers: {
           accept: 'application/json'
      }
    }).then((response) => {
      // Once we get the response, extract the access token from
      // the response body
      res.send(response.data.access_token)
      // redirect the user to the welcome page, along with the access token
    })
  })

  module.exports = router