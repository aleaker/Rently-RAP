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
        Username: "Hanoi",
        Password: "MongoHanoi"
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
        BankAccountInfo: {}
      }
    ]
  }
];
