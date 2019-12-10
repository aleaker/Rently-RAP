const request = require("request-promise-native");
const { fetchToken } = require("./ApiRental/RentalAPIs");

//al input hay que pasarle la data que llega del formulario de la reserva y eso es lo que va en el form, debajo de headers

var input = {};

const cosoBooking = async () => {
  const bookingToken = await fetchToken();
  Promise.all(
    bookingToken.map(booking => {
      const options = {
        uri: `${booking.Url}booking/book`,
        method: "POST",
        headers: {
          Authorization: `${booking.Token}`
        },
        form: {
          CarRentalId: "5dee8cb2bcf87f18ee12c2bf",
          FromDate: new Date(2020, 02, 01, 10, 00),
          ToDate: new Date(2020, 02, 02, 10, 00),
          deliveryPlace: { id: 1 },
          returnPlace: { id: 1 },
          Car: { model: { id: 46 } },
          illimitedKm: true,
          Customer: {
            Name: "Pepito Martinez",
            EmailAddress: "hola@ejemplo.com",
            DocumentId: "38267336",
            CellPhone: "1144374925"
          },
          Extra: "El cliente llega en el vuelo AA234 a las 23:50"
        }
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
  )
    .then(res => {
      var respuesta = res;
      return respuesta;
    })
    .catch(err => console.log(err));
};

cosoBooking();

function getCoso() {
  return cosoBooking;
}

module.exports = { cosoBooking, getCoso, respuesta };

//Un ejemplo de como es la respuesta: [ '{"BookingId":768,"CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]
