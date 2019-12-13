const request = require("request-promise-native");
const { fetchToken } = require("./ApiRental/RentalAPIs");
const Booking = require("../back/models/Booking");

// al "input" (que es un objeto vacio) hay que pasarle la data que llega del formulario de la reserva y eso es lo que va en el form, debajo de headers.

//EJEMPLO DE INPUT
let input = {
  body: {
    RentalData: { id: "5df15a0e7c464d3203332f3b", Name: "Shishitan" },
    FromDate: new Date(2020, 08, 01, 10, 00),
    ToDate: new Date(2020, 12, 02, 10, 00),
    deliveryPlace: { id: 4 },
    returnPlace: { id: 4 },
    Car: { Model: { id: 29 } },
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

console.log("SOYELFETCHTOKENAFUERADECOSOOOOO", fetchToken());
//FORMATO DE FECHA 2024-03-02T13:00:00.000Z
const cosoBooking = async (req, res) => {
  const rentalToken = await fetchToken();
  var rentadora = "5df15a0e7c464d3203332f3b";
  rentalToken.map(token => {
    if (token._id == rentadora) {
      const options = {
        uri: `${token.Url}booking/book`,
        method: "POST",
        headers: {
          Authorization: `${token.Token}`
        },
        form: req.body
      };
      return new Promise(resolve => {
        request(options, (error, res, body) => {
          if (error) {
            return;
          } else resolve(body);
        });
      }).then(res => {
        var respuesta = res;
        console.log("ESTAESLARESDELTHEEEEN", res);
        console.log("ESTOESREQDELTHEN", req);
        if (respuesta.BookingId) {
          Booking.create({
            Status: "Pending",
            BookingId: respuesta.BookingId,
            CarRental: req.body.RentalData.id,
            CustomerData: {
              CustomerId: respuesta.CustomerId,
              FirstName: req.body.Customer.Name,
              Email: req.body.Customer.EmailAddress,
              DocumentId: req.body.Customer.DocumentId,
              Telephone: req.body.Customer.CellPhone
            },
            Notes: req.body.Extra,
            Pickup: "Martinez",
            FromDate: req.body.FromDate,
            ToDate: req.body.ToDate
          }).then(book => console.log("RESERVA CREADA", book));
        } else {
          console.log("NO SE CREO LA RESERVA");
        }
      });
    }
  });
};

//Un ejemplo de como es la respuesta: [ '{"BookingId":768,"CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

module.exports = cosoBooking;
