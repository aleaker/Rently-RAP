const request = require("request-promise-native");
const { fetchToken } = require("./ApiRental/RentalAPIs");
const Booking = require("../back/models/Booking");

// al "input" (que es un objeto vacio) hay que pasarle la data que llega del formulario de la reserva y eso es lo que va en el form, debajo de headers.

//EJEMPLO DE INPUT
// input = {
//   CarRentalId: "5dee8cb2bcf87f18ee12c2bf",
//   FromDate: new Date(2023, 02, 01, 10, 00),
//   ToDate: new Date(2024, 02, 02, 10, 00),
//   deliveryPlace: { id: 1 },
//   returnPlace: { id: 1 },
//   Car: { model: { id: 46 } },
//   illimitedKm: true,
//   Customer: {
//     Name: "Pepito Martinez",
//     EmailAddress: "hola@ejemplo.com",
//     DocumentId: "38267336",
//     CellPhone: "1144374925"
//   },
//   Extra: "El cliente llega en el vuelo AA234 a las 23:50"
// };

const cosoBooking = async (req, res) => {
  const bookingToken = await fetchToken();
  Promise.all(
    bookingToken.map(booking => {
      const options = {
        uri: `${booking.Url}booking/book`,
        method: "POST",
        headers: {
          Authorization: `${booking.Token}`
        },
        form: input
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
      console.log(res.CarRental);
      var respuesta = res;
      return respuesta;
    })
    .then(() => {
      input = req.body;
      Booking.create({
        Status: "Pending",
        BookingId: req.body.BookingId,
        CarRental: req.body.CarRentalId,
        CustomerData: {
          FirstName: req.body.Name,
          Telephone: req.body.CellPhone,
          Email: req.body.EmailAddress,
          DocumentId: req.body.DocumentId
        },
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate,
        Pickup: req.body.deliveryPlace,
        Salesperson: req.body.User._id,
        Company: req.body.Company._id,
        Notes: req.body.Extra
      });
    });
};

//Un ejemplo de como es la respuesta: [ '{"BookingId":768,"CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

function getCoso() {
  return cosoBooking;
}

module.exports = cosoBooking;
