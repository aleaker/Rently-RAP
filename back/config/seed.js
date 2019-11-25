var seeder = require("mongoose-seed");

seeder.connect("mongodb://localhost/rentlydb", function() {
  // Load Mongoose models
  seeder.loadModels([
    "../models/Booking.js",
    "../models/CarRental.js",
    "../models/Commission.js",
    "../models/Company.js",
    "../models/CompanyAdmin.js",
    "../models/RentlyAdmin.js",
    "../models/Salesperson.js"
  ]);

  // Clear specified collections (?????)
  seeder.clearModels(["Model1", "Model2"], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: "RentlyAdmin",
    documents: [
      {
        Email: "hanoi@hanoi.com",
        Password: "MongoHanoi"
      },
      {
        Email: "lian@lian.com",
        Password: "MongoLian"
      },
      {
        Email: "alejo@alejo.com",
        Password: "MongoAlejo"
      },
      {
        Email: "juanma@juanma.com",
        Password: "MongoJuanma"
      },
      {
        Email: "joaco@joaco.com",
        Password: "MongoJoaco"
      }
    ]
  },
  {
    model: "Company",
    documents: [
      {
        CompanyName: "HanoiInc",
        Description: "Hanoi owns this company",
        Adress: "Av. HanoiInc 123",
        Country: "Argentina",
        Telephone: "61059032",
        MainContact: {
          FirstName: "Hanoi",
          LastName: "Hanoi LastName",
          IdType: "Cedula",
          IdNumber: "61059032",
          Email: "hanoi@hanoi.com"
        },
        BankAccountInfo: {
          Bank: "Banco",
          AccountType: "Bla",
          AccountNumber: "61059032",
          Curency: "Pesos ARG",
          SwiffCore: "que"
        },
        Commission: {
          Company: "HanoiInc",
          From: 10.0,
          To: 30.0,
          ToDate: 2019 - 09 - 06,
          FromDate: 2019 - 12 - 06,
          Type: "1"
        }
      },
      {
        CompanyName: "AleInc",
        Description: "Ale owns this company",
        Adress: "Av. AleInc 123",
        Country: "Argentina",
        Telephone: "61059032",
        MainContact: {
          FirstName: "Ale",
          LastName: "Ale LastName",
          IdType: "Cedula",
          IdNumber: "61059032",
          Email: "Ale@Ale.com"
        },
        BankAccountInfo: {
          Bank: "Banco",
          AccountType: "Bla",
          AccountNumber: "61059032",
          Curency: "Pesos ARG",
          SwiffCore: "que"
        },
        Commission: {
          Company: "AleInc",
          From: 10.0,
          To: 30.0,
          ToDate: 2019 - 09 - 06,
          FromDate: 2019 - 12 - 06,
          Type: "2"
        }
      },
      {
        CompanyName: "JoacoInc",
        Description: "Joaco owns this company",
        Adress: "Av. JoacoInc 123",
        Country: "Argentina",
        Telephone: "61059032",
        MainContact: {
          FirstName: "Joaco",
          LastName: "Joaco LastName",
          IdType: "Cedula",
          IdNumber: "61059032",
          Email: "Joaco@Joaco.com"
        },
        BankAccountInfo: {
          Bank: "Banco",
          AccountType: "Bla",
          AccountNumber: "61059032",
          Curency: "Pesos ARG",
          SwiffCore: "que"
        },
        Commission: {
          Company: "JoacoInc",
          From: 10.0,
          To: 30.0,
          ToDate: 2019 - 09 - 06,
          FromDate: 2019 - 12 - 06,
          Type: "3"
        }
      },
      {
        CompanyName: "JuanmaInc",
        Description: "Juanma owns this company",
        Adress: "Av. JuanmaInc 123",
        Country: "Argentina",
        Telephone: "61059032",
        MainContact: {
          FirstName: "Juanma",
          LastName: "Juanma LastName",
          IdType: "Cedula",
          IdNumber: "61059032",
          Email: "Juanma@Juanma.com"
        },
        BankAccountInfo: {
          Bank: "Banco",
          AccountType: "Bla",
          AccountNumber: "61059032",
          Curency: "Pesos ARG",
          SwiffCore: "que"
        },
        Commission: {
          Company: "JuanmaInc",
          From: 10.0,
          To: 30.0,
          ToDate: 2019 - 09 - 06,
          FromDate: 2019 - 12 - 06,
          Type: "4"
        }
      },
      {
        CompanyName: "LianInc",
        Description: "Lian owns this company",
        Adress: "Av. LianInc 123",
        Country: "Argentina",
        Telephone: "61059032",
        MainContact: {
          FirstName: "Lian",
          LastName: "Lian LastName",
          IdType: "Cedula",
          IdNumber: "61059032",
          Email: "Lian@Lian.com"
        },
        BankAccountInfo: {
          Bank: "Banco",
          AccountType: "Bla",
          AccountNumber: "61059032",
          Curency: "Pesos ARG",
          SwiffCore: "que"
        },
        Commission: {
          Company: "LianInc",
          From: 10.0,
          To: 30.0,
          ToDate: 2019 - 09 - 06,
          FromDate: 2019 - 12 - 06,
          Type: "5"
        }
      }
    ]
  },
  {
    model: "CompanyAdmin",
    documents: [
      {
        Email: "hanoi@hanoi.com",
        Password: "admin",
        Company: "HanoiInc"
      },
      {
        Email: "joaco@joaco.com",
        Password: "admin",
        Company: "JoacoInc"
      },
      {
        Email: "alejo@alejo.com",
        Password: "admin",
        Company: "AlejoInc"
      },
      {
        Email: "lian@lian.com",
        Password: "admin",
        Company: "LianInc"
      },
      {
        Email: "juanma@juanma.com",
        Password: "admin",
        Company: "JuanmaInc"
      }
    ]
  },
  {
    model: "Salesperson",
    document: [
      {
        Email: "hanoi@hanoi.com",
        Password: "salesperson",
        FistName: "Hanoi",
        LastName: "Hanoi LastName",
        Company: "HanoiInc",
        Telephone: "61059032",
        Photo:
          "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
        Notes: "Notas SOBRE el vendedor o DEL vendedor?",
        CommissionScheme: "6"
      },
      {
        Email: "lian@lian.com",
        Password: "salesperson",
        FistName: "Lian",
        LastName: "Lian LastName",
        Company: "LianInc",
        Telephone: "61059032",
        Photo:
          "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
        Notes: "Notas SOBRE el vendedor o DEL vendedor?",
        CommissionScheme: "6"
      },
      {
        Email: "joaco@joaco.com",
        Password: "salesperson",
        FistName: "Joaco",
        LastName: "Joaco LastName",
        Company: "JoacoInc",
        Telephone: "61059032",
        Photo:
          "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
        Notes: "Notas SOBRE el vendedor o DEL vendedor?",
        CommissionScheme: "6"
      },
      {
        Email: "alejo@alejo",
        Password: "salesperson",
        FistName: "Alejo",
        LastName: "Alejo LastName",
        Company: "AlejoInc",
        Telephone: "61059032",
        Photo:
          "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
        Notes: "Notas SOBRE el vendedor o DEL vendedor?",
        CommissionScheme: "6"
      },
      {
        Email: "juanma@juanma",
        Password: "salesperson",
        FistName: "Juanma",
        LastName: "Juanma LastName",
        Company: "JuanmaInc",
        Telephone: "61059032",
        Photo:
          "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
        Notes: "Notas SOBRE el vendedor o DEL vendedor?",
        CommissionScheme: "6"
      }
    ],
    model: "CarRental",
    documents: [
      {
        Name: "Pepe Rental",
        Logo:
          "https://www.stickpng.com/assets/images/5a2ae85adb68181c8f184d6f.png",
        Url: "", //viene de la api
        User: "", //viene de la api
        Password: "", //viene de la api
        MainContact: {
          FirstName: "Pepe",
          LastName: "Casagrande",
          Email: "peperent@hotmail.com"
        }
      },
      {
        Name: "Pepe Rental",
        Logo:
          "https://media.staticontent.com/media/pictures/4dbee6c4-b9b7-4300-9330-db685c4400c2.png",
        Url: "", //viene de la api
        User: "", //viene de la api
        Password: "", //viene de la api
        MainContact: {
          FirstName: "Guido",
          LastName: "Brown",
          Email: "guidobrown@despegar.com"
        }
      },
      {
        Name: "Miriam Rent a Car",
        Logo:
          "http://edicion.ypf.com/serviclub/Catalogo/Lists/ImagenesBeneficios/street_rent_a_car-ypf-beneficio-serviclub.jpg",
        Url: "", //viene de la api
        User: "", //viene de la api
        Password: "", //viene de la api
        MainContact: {
          FirstName: "Miriam",
          LastName: "Muller",
          Email: "miriamrentacar@gmail.com"
        }
      },
      {
        Name: "Han Oy Rental",
        Logo:
          "https://d12z4gz8sifrx.cloudfront.net/assets/media//madrid-portada-landing-rent-a-car-low-cost-pepecar.jpg",
        Url: "", //viene de la api
        User: "", //viene de la api
        Password: "", //viene de la api
        MainContact: {
          FirstName: "Han",
          LastName: "Oy",
          Email: "hanoy@hotmail.com"
        }
      },
      {
        Name: "Alfred Agency",
        Logo:
          "https://media.glassdoor.com/sqll/2485315/carone-supermercados-squarelogo-1553125336866.png",
        Url: "", //viene de la api
        User: "", //viene de la api
        Password: "", //viene de la api
        MainContact: {
          FirstName: "Alfred",
          LastName: "Pury",
          Email: "joaquinlarralde@hotmail.com"
        }
      }
    ]
  },
  {
    model: "Booking",
    documents: [
      {
        BookingId: 1,
        CarRental: "Pepe Rental",

        CustomerData: {
          FirstName: "Alfredo",
          LastName: "Gomez",
          Telephone: 45520844,
          Email: "pipi@hotmail.com"
        },
        FromDate: 11 - 01 - 2020,
        ToDate: 13 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$3500"
      },
      {
        BookingId: 2,
        CarRental: "Pepe Rental",
        CustomerData: {
          FirstName: "Roberto",
          LastName: "Maldi",
          Telephone: 1134555467,
          Email: "robertomaldi@hotmail.com"
        },
        FromDate: 15 - 01 - 2020,
        ToDate: 20 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$7500"
      },
      {
        BookingId: 3,
        CarRental: "Miriam Rent a Car",
        CustomerData: {
          FirstName: "Melisa",
          LastName: "Farh",
          Telephone: 1155447890,
          Email: "melisakpatotal@hotmail.com"
        },
        FromDate: 4 - 01 - 2020,
        ToDate: 13 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$8500"
      },
      {
        BookingId: 4,
        CarRental: "Alfred Agency",
        CustomerData: {
          FirstName: "Linda",
          LastName: "Lera",
          Telephone: 433466755,
          Email: "lile@hotmail.com"
        },
        FromDate: 25 - 04 - 2020,
        ToDate: 28 - 04 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$1500"
      },
      {
        BookingId: 5,
        CarRental: "Alfred Agency",
        CustomerData: {
          FirstName: "Silvia",
          LastName: "Veraz",
          Telephone: 1135564887,
          Email: "selvee@hotmail.com"
        },
        FromDate: 21 - 01 - 2020,
        ToDate: 12 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$5500"
      },
      {
        BookingId: 6,
        CarRental: "Han Oy Rental",
        CustomerData: {
          FirstName: "Santiago",
          LastName: "Diaz",
          Telephone: 1132223431,
          Email: "pipi@hotmail.com"
        },
        FromDate: 13 - 01 - 2020,
        ToDate: 14 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$2500"
      },
      {
        BookingId: 7,
        CarRental: "Han Oy Rental",
        CustomerData: {
          FirstName: "Lolo",
          LastName: "Mega",
          Telephone: 1164435798,
          Email: "lolom@hotmail.com"
        },
        FromDate: 15 - 01 - 2020,
        ToDate: 30 - 01 - 2020,
        Pickup: "Oficina Central",
        Dropoff: "Oficina Central",
        Price: "$11500"
      }
    ]
  }
];
