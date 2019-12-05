const request = require("request");
const { rentalToken } = require("./ApiRental/RentalAPIs");

const fetchCities = () => {
  const Cities = {};
  Promise.all(
    (rentalToken || []).map(rental => {
      let rentalname = rental.Name;
      const options = {
        uri: `${rental.Url}/places`,
        method: "GET",
        headers: { Authorization: `Bearer ${rental.Token}` }
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
  });
};

module.exports = fetchCities;
