const router = require("express").Router();
const request = require("request-promise-native");
const { fetchToken } = require("../ApiRental/RentalAPIs");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL, PASSWORD } = process.env;

router.post("/", async (req, res) => {
  var book = {
    FromDate: req.body.reservation.FromDate,
    ToDate: req.body.reservation.ToDate,
    DeliveryPlace: { Id: req.body.reservation.DeliveryPlace.Id },
    ReturnPlace: { Id: req.body.reservation.ReturnPlace.Id },
    Car: { Model: { Id: req.body.reservation.Car.Model.Id } },
    IlimitedKm: req.body.reservation.IlimitedKm,
    Customer: {
      Name: `${req.body.customer.FirstName} ${req.body.customer.LastName}`,
      EmailAddress: req.body.customer.Email,
      DocumentId: req.body.customer.DocumentId,
      CellPhone: req.body.customer.Telephone
    }
  };
  const rentalToken = await fetchToken();
  var rentadora = req.body.reservation.RentalData.id;
  rentalToken.map(token => {
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
        .then(respuesta => JSON.parse(respuesta))
        .then(respuesta => {
          if (respuesta.BookingId) {
            console.log("entreeee", respuesta);
            return Booking.create({
              Status: "Pending",
              BookingId: respuesta.BookingId,
              CarRental: req.body.reservation.RentalData.id,
              CustomerData: {
                CustomerId: respuesta.CustomerId,
                FirstName: req.body.customer.FirstName,
                LastName: req.body.customer.LastName,
                Email: req.body.customer.Email,
                DocumentId: req.body.customer.DocumentId,
                CellPhone: req.body.customer.CellPhone,
                DocumentType: req.body.customer.DocumentType
              },
              Notes: "",
              Dropoff: req.body.reservation.ReturnPlace.Id,
              Pickup: req.body.reservation.DeliveryPlace.Id,
              FromDate: req.body.reservation.FromDate,
              ToDate: req.body.reservation.ToDate,
              Price: req.body.reservation.Price
            }).catch(err => console.log(err));
          } else if (respuesta.ErrorMessage) {
            res.send(respuesta.ErrorMessage);
          }
        })
        .then(booking => {
          var dateHour = str => {
            var date = str.split("T")[0];
            var hour = str.split("T")[1].slice(0, -1);
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
              to: `${req.body.customer.Email}`,
              subject: "Booking Confirmation",
              html: ` <head><style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 50%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style></head>
            <div> <p> Hola ${
              booking.CustomerData.FirstName
            }, en este e-mail te adjuntamos los datos de tu reserva: </p> </div>
          
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
              <td>${req.body.reservation.Car.Model.Brand.Name}</td>
            </tr>
            <tr>
              <td>Modelo: </td>
              <td>${req.body.reservation.Car.Model.Name}</td>
            </tr>
            <tr>
              <td>Desde la fecha: </td>
              <td>${dateHour(req.body.reservation.FromDate)}</td>
            </tr>
            <tr>
              <td>Hasta la fecha: </td>
              <td>${dateHour(req.body.reservation.ToDate)}</td>
            </tr>
            <tr>
              <td>Lugar de retiro: </td>
              <td>${req.body.reservation.DeliveryPlace.Address}</td>
            </tr>
            <tr>
              <td>Lugar de devolución: </td>
              <td>${req.body.reservation.ReturnPlace.Address}</td>
            </tr>
            <tr>
              <td>Precio: </td>
              <td>$ ${booking.Price}</td>
            </tr>
            <tr>
              <td>Rentadora: </td>
              <td>${req.body.reservation.RentalData.Name}</td>
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
        .then(() => res.sendStatus(201))
        .catch(err => console.log(err));
    }
  });
});

//Un ejemplo de como es la respuesta: [ '{"BookingId":768, "CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

module.exports = router;

/* module.exports = router; */

/* var a =  ; */
