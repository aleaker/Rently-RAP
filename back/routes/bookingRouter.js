const router = require("express").Router();
const request = require("request-promise-native");
const { fetchToken } = require("../ApiRental/RentalAPIs");
const Booking = require("../models/Booking");

// al input hay que pasarle la data que llega del formulario de la reserva y eso es lo que va en el form, debajo de headers

//EJ DE INPUT
let req = {
  body: {
    CarRentalId: "5dee8cb2bcf87f18ee12c2bf",
    FromDate: new Date(2023, 02, 01, 10, 00),
    ToDate: new Date(2024, 02, 02, 10, 00),
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

/* router.post("/booking",) */
let hola = async () => {
  const bookingToken = await fetchToken();
  console.log(bookingToken, "soy booking");
};
console.log(hola(), "asjknakjsndaks");
/*

const hola = async (req, res) => {
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
    })
    .then(booking => {
      console.log(booking);
    });
}; */

/* const hola = async (req, res) => {
  let booking = [
    { BookingId: 800, CustomerId: "6461c650-e9c3-4eca-8f6f-3ada1015bdba" }
  ];
  Booking.create({
    Status: "Pending",
    BookingId: booking[0].BookingId,
    CarRental: req.body.RentalData.id,
    CustomerData: {
      FirstName: req.body.Name,
      Telephone: req.body.CellPhone,
      Email: req.body.EmailAddress,
      DocumentId: req.body.DocumentId
    },
    FromDate: req.body.FromDate,
    ToDate: req.body.ToDate,
    // Pickup: req.body.deliveryPlace,
    Notes: req.body.Extra
  }).then(booking => {
    console.log(booking);
  });
};

(function hola2() {
  return hola(req);
})(); */

//Un ejemplo de como es la respuesta: [ '{"BookingId":768,"CustomerId":"6461c650-e9c3-4eca-8f6f-3ada1015bdba"}' ]

module.exports = router;

/* var a = {
    customer: {
    DocumentId: "",
    DocumentType: "",
    Email: "",
    FirstName: "",
    LastName: "",
    Telephone: ""
  },
  reservation: {
    Additionals: [],
    AverageDayPrice: 830,
    Car: {
      Id: "123",
      Model: {
        AirConditioner: "Si",
        BigLuggage: 2,
        Brand: { Name: "Ford" },
        Category: { Id: 25, Name: "Chicos" },
        DailyPrice: 0,
        Description:
          "sdpufh asidfpasfs fusp fiusf sjknf saiuhfp sufñsadn fpisud pfiusdf",
        Doors: 5,
        Franchise: 20000,
        Gearbox: "Manual",
        Id: 29,
        ImagePath:
          "https://rently.blob.core.windows.net/demo/CarModel/76d79b6f-643c-42ed-bfed-c3c268a0d4b6.jpg",
        Multimedia: "MP3",
        Name: "Fiesta",
        Passengers: 4,
        SIPP: null,
        SmallLuggage: 2,
        Steering: "Hidraulica"
      }
    },
    Category: { Id: 25, Name: "Chicos" },
    Currency: null,
    DeliveryPlace: {
      Address: "Aeropuerto Internacional Ezeiza, Buenos Aires",
      Category: "Terminales",
      City: "Buenos Aires",
      Country: null,
      Id: 2,
      Name: "Aeropuerto de Ezeiza",
      Price: 400
    },
    Franchise: 20000,
    FromDate: "2020-03-01T13:00:00Z",
    HasFranchiseModifiers: false,
    IlimitedKm: false,
    Price: 27775,
    RentalData: { id: "5dee898d0139d61193143c77", Name: "rentadora lolo" },
    ReturnPlace: {
      Address: "Aeropuerto Internacional Ezeiza, Buenos Aires",
      Category: "Terminales",
      City: "Buenos Aires",
      Country: null,
      Id: 2,
      Name: "Aeropuerto de Ezeiza",
      Price: 400
    },
    ToDate: "2020-04-02T14:01:00Z",
    TotalDays: 32.5,
    TotalDaysString: "32 1/2",
    WillLeaveCountry: null
  },
  user: {
    Active: true,
    CommissionScheme: [],
    Email: "adminis@rently.com",
    FirstName: "rently",
    LastName: "admin",
    Password: "$2a$10$PXNzTznLd8XBwinCXUg8dO3mJeWTfC5zGQPmTpidVPyFc2zGjfZ5q",
    Photo:
      "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png(42 kB)",
    Telephone: "1136363636",
    UserType: "rentlyadmin",
    __v: 0,
    _id: "5de6ae9be07a5c70caf563ba"
  }
}; */
