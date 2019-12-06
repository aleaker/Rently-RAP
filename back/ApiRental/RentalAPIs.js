const CarRental = require("../models/CarRental");
const request = require("request-promise-native");


var rentalToken = []
var probando = 0;


const rentalTokenfunction = () => {console.log("ENTRE PAPI")
  CarRental.find({ Active: true }, "Name Url User Password")
    .lean()
    .exec()
    .then(rentals => {
      rentals.map(rental => (rental.Token = `Bearer `));
      return rentals;
    })
    .then(async rentals => {console.log("soy rentals papi",rentals)
      await Promise.all(
        rentals.map(rental => {
          return request
            .post(
              `${rental.Url.replace("api/", "auth/token")}`,
              {
                form: {
                  grant_type: "client_credentials",
                  client_id: `${rental.User}`,
                  client_secret: `${rental.Password}`
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
      console.log("AAAAAAAAAAAAAAAAAAAAA",rentalToken);
      return setTimeout(() => rentalTokenfunction(), 3300000);
    })
    .catch(err => console.log);
};

function fetchToken(){
  return rentalToken
}
module.exports = { rentalTokenfunction, rentalToken, fetchToken };
