const request = require("request-promise-native");
const { fetchToken } = require("./ApiRental/RentalAPIs");

// //ESTE ES MI INPUT
// input = {
//    FromDate: 02/01/2020 10:00,
//    ToDate: 02/02/2020 10:00,
//    deliveryPlace.id: 1,
//    returnPlace.id: 1,
//    Car.model.Id: 46,
//    illimitedKm: true,
//    Customer:
//       {
//       Customer.Name: ‘Pepito Martinez’,
//       Customer.EmailAdress: ‘hola@ejemplo.com’,
//       Customer.DocumentId: ‘38267336’,
//       Customer.CellPhone: ‘1144374925’,
//    }
//    Extra: "El cliente llega en el vuelo AA234 a las 23:50"
//    }

//ESTE ES MI OUTPUT ??? kee

const postBooking = async () => {
  const bookingToken = fetchToken();
  Promise.all(
    bookingToken.map(booking => {
      const options = {
        uri: `${booking.Url}booking/book`,
        method: "POST",
        headers: { Authorization: `${rental.Token}` }
      };

      return new Promise(resolve => {
        request(options, (error, res, body) => {
          if (error) {
            console.error(error);
            return;
          } else resolve(body);
        });
      });
    })
  ).then(body => {
    console.log("ESTOESBOOOODY:", body); //NO ENTRA ACA TAMPOCO !!!
  });
};

postBooking();

module.exports = postBooking;
