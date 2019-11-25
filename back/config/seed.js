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
        Username: "Hanoi",
        Password: "MongoHanoi"
      },
      {
        Username: "Lian",
        Password: "MongoLian"
      },
      {
        Username: "Alejo",
        Password: "MongoAlejo"
      },
      {
        Username: "Juanma",
        Password: "MongoJuanma"
      },
      {
        Username: "Joaco",
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
  }
];
