const CarRental = require("../models/CarRental");
const request = require("request-promise-native");

var probando = 0;
var rentalToken;

const rentalTokenfunction = () => {
  CarRental.find({ Active: true }, "Name Url User Password")
    .lean()
    .exec()
    .then(rentals => {
      rentals.map(rental => (rental.Token = `Bearer `));
      return rentals;
    })
    .then(async rentals => {
      await Promise.all(
        rentals.map(rental => {
          return request
            .post(
              "https://demo.rently.com.ar/auth/token",
              {
                form: {
                  grant_type: "client_credentials",
                  client_id: "rentlyweb",
                  client_secret:
                    "9$3Gx#;6a8K!%AXB:+}rX^Ek%6:/{*_LvDJ6{n{G-&J;]5sA)$aXLP$@j1XaR>31"
                }
              },
              (error, res, body) => {
                if (error) {
                  console.error(error);
                  return;
                }
              }
            )
            .then(
              e => (rental.Token = `Bearer ${JSON.parse(e)["access_token"]}`)
            );
        })
      );
      return rentals;
    })
    .then(rentalsToken2 => {
      rentalToken = rentalsToken2;
      console.log(rentalToken);
      return setTimeout(() => rentalTokenfunction(), 3300000);
    })
    .catch(err => console.log);
};

module.exports = { rentalTokenfunction, rentalToken };
