const router = require("express").Router();
const request = require("request-promise-native");
const { fetchToken } = require("../ApiRental/RentalAPIs");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL, PASSWORD } = process.env;

// al "input" (que es un objeto vacio) hay que pasarle la data que llega del formulario de la reserva y eso es lo que va en el form, debajo de headers.

//EJEMPLO DE INPUT
/* let input = {
  body: {
    RentalData: { id: "5dee88d3e5dfd80716d59ee8", Name: "Shishitan" },
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
}; */

const cosoBooking = async (req, res) => {
  var book = {
    FromDate: req.body.FromDate,
    ToDate: req.body.ToDate,
    DeliveryPlace: { Id: req.body.DeliveryPlace.Id },
    ReturnPlace: { Id: req.body.ReturnPlace.Id },
    Car: { Model: { id: req.body.Car.Model.Id } },
    IlimitedKm: req.body.IlimitedKm,
    Customer: {
      Name: `${req.body.Customer.FirstName} ${req.body.Customer.LastName}`,
      EmailAddress: req.body.Customer.EmailAddress,
      DocumentId: req.body.Customer.DocumentId,
      CellPhone: req.body.Customer.Telephone
    }
  };
  const rentalToken = await fetchToken();
  var rentadora = req.body.RentalData.id;
  console.log(rentadora, "SOOY RENTADORA");
  rentalToken.map(token => {
    console.log(token._id, "SOOY TOKEEEN");
    if (token._id == rentadora) {
      const options = {
        uri: `${token.Url}booking/book`,
        method: "POST",
        headers: {
          Authorization: `${token.Token}`
        },
        form: book
      };
      return new Promise(resolve => {
        request(options, (error, res, body) => {
          if (error) {
            console.log(error);
            return;
          } else resolve(body);
        });
      })
        .then(
          respuesta => (
            console.log("resssssssspuesta", respuesta, "kjanksdjnflajknsdf"),
            JSON.parse(respuesta)
          )
        )
        .then(respuesta => {
          console.log("holaaa");
          if (respuesta.BookingId) {
            return Booking.create({
              Status: "Pending",
              BookingId: respuesta.BookingId,
              CarRental: req.body.RentalData.id,
              CustomerData: {
                CustomerId: respuesta.CustomerId,
                FirstName: req.body.Customer.FirstName,
                LastName: req.body.Customer.LastName,
                Email: req.body.Customer.Email,
                DocumentId: req.body.Customer.DocumentId,
                CellPhone: req.body.Customer.CellPhone,
                DocumentType: req.body.Customer.DocumentType
              },
              Notes: "",
              Dropoff: req.body.ReturnPlace.Id,
              Pickup: req.body.DeliveryPlace.Id,
              FromDate: req.body.FromDate,
              ToDate: req.body.ToDate,
              Price: req.body.Price
            }).catch(err => console.log(err));
          }
        })
        .then(booking => {
          var dateHour = str => {
            var date = str.split("T")[0];
            var hour = str.split("T")[1].slice(0, -1);
            console.log(hour);
            return `${date}, ${hour} hs.`;
          };

          if (booking) {
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: `${EMAIL}`,
                pass: `${PASSWORD}`
              }
            });

            let mailOptions = {
              from: `${EMAIL}`,
              to: `joacolarral@gmail.com`,
              subject: "Booking Confirmation",
              html: ` <head><style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 50%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style></head>
            <div> <p> Hola ${
              booking.CustomerData.FirstName
            }, en este e-mail te adjuntamos todos los datos de tu reserva: </p> </div>
          
            <table>
            <tr>
              <th>Numero Reserva: </th>
              <th>${booking.BookingId}</th>
            </tr>
            <tr>
              <td>Nombre y Apellido: </td>
              <td>${booking.CustomerData.FirstName} ${
                booking.CustomerData.LastName
              }</td>
            </tr>
            <tr>
              <td>Auto: </td>
              <td>${req.body.Car.Model.Brand.Name}</td>
            </tr>
            <tr>
              <td>Modelo: </td>
              <td>${req.body.Car.Model.Name}</td>
            </tr>
            <tr>
              <td>Desde la fecha: </td>
              <td>${dateHour(req.body.FromDate)}</td>
            </tr>
            <tr>
              <td>Hasta la fecha: </td>
              <td>${dateHour(req.body.ToDate)}</td>
            </tr>
            <tr>
              <td>Lugar de retiro: </td>
              <td>${req.body.DeliveryPlace.Address}</td>
            </tr>
            <tr>
              <td>Lugar de devolución: </td>
              <td>${req.body.ReturnPlace.Address}</td>
            </tr>
            <tr>
              <td>Precio: </td>
              <td>$ ${booking.Price}</td>
            </tr>
            <tr>
              <td>Rentadora: </td>
              <td>${req.body.RentalData.Name}</td>
            </tr>
          </table>`
            };

            transporter.sendMail(mailOptions, function(error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
          }
        })
        .catch(err => console.log(err));
    }
  });
};

//Un ejemplo de como es la respuesta: [ '{"BookingId":768, "CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

module.exports = cosoBooking;

/* module.exports = router; */

/* var a =  ; */
