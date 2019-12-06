const request = require("request");
const {  fetchToken } = require("./ApiRental/RentalAPIs");
var rentalCities = {};

const fetchCities = async () => {
  const rentalToken =  fetchToken()
  const Cities = {};
  Promise.all(
    rentalToken.map(rental => {
      let rentalname = rental.Name;
      const options = {
        uri: `${rental.Url}places`,
        method: "GET",
        headers: { Authorization: `${rental.Token}` }
      };

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
    
    console.log("ESTASSONLASCITIEEES", Cities);
    rentalCities = Cities;
  });
};

function getCity(){
  return rentalCities
}

module.exports = {fetchCities,getCity}
