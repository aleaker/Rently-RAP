const router = require("express").Router();
var cors = require("cors");
const request = require("request");

const { AUTH_URL, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET } = process.env;

router.post("/get", (req, resp) => {
  let s = req.body;

  return new Promise(resolve => {
    request.post(
      AUTH_URL,
      {
        form: {
          grant_type: GRANT_TYPE,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }
      },
      (error, res, body) => {
        if (error) {
          console.error(error);
          return;
        }
        resolve(body);
      }
    );
  })
    .then(auth_body => JSON.parse(auth_body)["access_token"])
    .then(access_token => {
      const options = {
        uri: `https://demo.rently.com.ar/api/search?searchModel.from=${s.From}&searchModel.to=${s.To}&searchModel.fromPlace=${s.FromPlace}&searchModel.toPlace=${s.ToPlace}&searchModel.promotion&searchModel.ilimitedKm=${s.IllimitedKm}&searchModel.onlyFullAvailability=${s.OnlyFullAvailability}&searchModel.customerItsOver25=${s.Age}`,
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` }
      };
      return options;
    })
    .then(options =>
      request(options, (error, res, body) => {
        if (error) {
          console.error(error);
          return;
        }
        resp.send(body);
      })
    );
});

module.exports = router;
