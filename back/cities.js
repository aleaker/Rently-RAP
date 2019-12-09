const request = require("request");
const { fetchToken } = require("./ApiRental/RentalAPIs");
var rentalCities = {};

const fetchCities = async () => {
  const rentalToken = fetchToken();
  const Cities = {};
  console.log("ESTO ES RENTALTOKEN", rentalToken); //RENTALTOKEN ESTA VACIOOO !!!
  Promise.all(
    rentalToken.map(rental => {
      // console.log("ENTREALPROMISEALLLLLLL", rental) NO ENTRA !!
      let rentalname = rental.Name;
      const options = {
        uri: `${rental.Url}places`,
        method: "GET",
        headers: { Authorization: `${rental.Token}` }
      };
      // console.log("SALIIIDELPROMISEALLLLLLLL") NO ENTRA !!
      return new Promise(resolve => {
        request(options, (error, res, body) => {
          if (error) {
            console.error(error);
            return;
          } else resolve(body);
        });
      })
        .then(res => JSON.parse(res))
        .then(places => {
          console.log(places);
          places.map(place => {
            if (!Cities[place.City]) {
              Cities[place.City] = { [rentalname]: [place.Id] };
            }
            if (Cities[place.City] && Cities[place.City][rentalname]) {
              Cities[place.City][rentalname].push(place.Id);
            } else {
              Cities[place.City][rentalname] = [place.Id];
            }
          });
        });
    })
  ).then(() => {
    rentalCities = Cities;
    console.log("ESTASONLASCITIEEES:", Cities);
  });
};

function getCity() {
  return rentalCities;
}

module.exports = { fetchCities, getCity };
