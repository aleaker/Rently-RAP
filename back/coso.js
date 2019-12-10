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

//Un ejemplo de como es la respuesta: [ '{"BookingId":768,"CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

//Despues la respuesta la usas como req.body en la ruta post para nuestra DB, de la situiente manera:

//CREAR UNA RESERVA: POST http://localhost:3000/api/booking

router.post("/booking", (req, res) => {
  let newbooking = {
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
    Dropoff: req.body.returnPlace,
    Car: req.body.Car.model.id,
    illimitedKm: req.body.illimitedKm,
    Salesperson: req.body.User._id,
    Company: req.body.Company._id,
    Notes: req.body.Extra
  };
  try {
    Booking.create(newbooking);
    console.log("Reserva guardada");
    res.redirect("/api/booking");
  } catch (err) {
    console.log(err);
  }
});

module.exports = { cosoBooking, getCoso, respuesta };
