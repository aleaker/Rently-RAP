require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL, PASSWORD } = process.env;

let booking = {
  Status: "Confirmada",
  BookingId: 6105349032,
  CarRental: "5ddd8d7e3a318d70b9a82b2c",
  CustomerData: {
    FirstName: "Hanoi",
    LastName: "Pacheco",
    Telephone: "61059032",
    Email: "mauroviale@lucas.com"
  },
  Salesperson: "5ddd996af8219a0d253307d1",
  Company: "5ddd47172edd344b3422cbe8",
  SalespersonCommissionAmount: 5000,
  CompanyCommissionAmount: 10000,
  RentlyCommissionAmount: 100000,
  FromDate: "25/01/2020",
  ToDate: "01/02/2020",
  Pickup: "Aeropuerto Ezeiza",
  Dropoff: "Aeropuerto Ezeiza",
  Price: 15000
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${EMAIL}`,
    pass: `${PASSWORD}`
  }
});

let mailOptions = {
  from: `${EMAIL}`,
  to: `alejoakerfeld@gmail.com`,
  subject: "Booking Confirmation",
  html: ` <head><style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 50%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style></head>
  <div> <p> Hola ${booking.CustomerData.FirstName}, en este e-mail te adjuntamos todos los datos de tu reserva: </p> </div>

  <table>
  <tr>
    <th>Numero Reserva: </th>
    <th>${booking.BookingId}</th>
  </tr>
  <tr>
    <td>Nombre y Apellido: </td>
    <td>${booking.CustomerData.FirstName} ${booking.CustomerData.LastName}</td>
  </tr>
  <tr>
    <td>Desde la fecha: </td>
    <td>${booking.FromDate}</td>
  </tr>
  <tr>
    <td>Hasta la fecha: </td>
    <td>${booking.ToDate}</td>
  </tr>
  <tr>
    <td>Lugar de retiro: </td>
    <td>${booking.Pickup}</td>
  </tr>
  <tr>
    <td>Lugar de devolución: </td>
    <td>${booking.Dropoff}</td>
  </tr>
  <tr>
    <td>Precio: </td>
    <td>$ ${booking.Price}</td>
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
