const RentlyAdmin = require("./models/RentlyAdmin");
const Company = require("./models/Company");
const CompanyAdmimn = require("./models/CompanyAdmin");
const Commission = require("./models/Commission");
const CarRental = require("./models/CarRental");
const Salesperson = require("./models/Salesperson");
const Booking = require("./models/Booking");
const mongoose = require("mongoose");

Commission.find().then(commissions => {
  return commissions.map(com => {
    Company.update(
      { _id: com.Company },
      { $push: { CommissionScheme: com._id } }
    );
  });
});

Promise.all([
  RentlyAdmin.create({ Email: "hanoi@hanoi.com", Password: "MongoHanoi" }),
  RentlyAdmin.create({ Email: "lian@lian.com", Password: "MongoLian" }),
  RentlyAdmin.create({ Email: "alejo@alejo.com", Password: "MongoAlejo" }),
  RentlyAdmin.create({ Email: "juanma@juanma.com", Password: "MongoJuanma" }),
  RentlyAdmin.create({ Email: "joaco@joaco.com", Password: "MongoJoaco" })
]);

Promise.all([
  Company.create({
    CompanyName: "HanoiInc",
    Description: "Hanoi owns this company",
    Address: "Av. HanoiInc 123",
    Country: "Argentina",
    Telephone: "61059032",
    MainContact: {
      FirstName: "Hanoi",
      LastName: "Hanoi LastName",
      IdType: "Cedula",
      IdNum: "61059032",
      Email: "hanoi@hanoi.com"
    },
    BankAccountInfo: {
      Bank: "Banco",
      AccountType: "Bla",
      AccountNumber: "61059032",
      Curency: "Pesos ARG",
      SwiffCore: "que"
    }
  }),
  Company.create({
    CompanyName: "AleInc",
    Description: "Ale owns this company",
    Address: "Av. AleInc 123",
    Country: "Argentina",
    Telephone: "61059032",
    MainContact: {
      FirstName: "Ale",
      LastName: "Ale LastName",
      IdType: "Cedula",
      IdNum: "61059032",
      Email: "Ale@Ale.com"
    },
    BankAccountInfo: {
      Bank: "Banco",
      AccountType: "Bla",
      AccountNumber: "61059032",
      Curency: "Pesos ARG",
      SwiffCore: "que"
    }
  }),
  Company.create({
    CompanyName: "JoacoInc",
    Description: "Joaco owns this company",
    Address: "Av. JoacoInc 123",
    Country: "Argentina",
    Telephone: "61059032",
    MainContact: {
      FirstName: "Joaco",
      LastName: "Joaco LastName",
      IdType: "Cedula",
      IdNum: "61059032",
      Email: "Joaco@Joaco.com"
    },
    BankAccountInfo: {
      Bank: "Banco",
      AccountType: "Bla",
      AccountNumber: "61059032",
      Curency: "Pesos ARG",
      SwiffCore: "que"
    }
  }),
  Company.create({
    CompanyName: "JuanmaInc",
    Description: "Juanma owns this company",
    Address: "Av. JuanmaInc 123",
    Country: "Argentina",
    Telephone: "61059032",
    MainContact: {
      FirstName: "Juanma",
      LastName: "Juanma LastName",
      IdType: "Cedula",
      IdNum: "61059032",
      Email: "Juanma@Juanma.com"
    },
    BankAccountInfo: {
      Bank: "Banco",
      AccountType: "Bla",
      AccountNumber: "61059032",
      Curency: "Pesos ARG",
      SwiffCore: "que"
    }
  }),
  Company.create({
    CompanyName: "LianInc",
    Description: "Lian owns this company",
    Address: "Av. LianInc 123",
    Country: "Argentina",
    Telephone: "61059032",
    MainContact: {
      FirstName: "Lian",
      LastName: "Lian LastName",
      IdType: "Cedula",
      IdNum: "61059032",
      Email: "Lian@Lian.com"
    },
    BankAccountInfo: {
      Bank: "Banco",
      AccountType: "Bla",
      AccountNumber: "61059032",
      Curency: "Pesos ARG",
      SwiffCore: "que"
    }
  })
]).then(
  ([companyHanoi, companyAle, companyJoaco, companyJuanma, companyLian]) => {
    Commission.create(
      {
        Company: companyLian._id,
        From: 10000,
        To: 30000,
        ToDate: Date("2019-12-07"),
        fromDate: Date("2019-06-07"),
        Type: "5"
      },
      {
        Company: companyJuanma._id,
        From: 10000,
        To: 30000,
        ToDate: Date("2019-12-07"),
        fromDate: Date("2019-06-07"),
        Type: "4"
      },
      {
        Company: companyJoaco._id,
        From: 10000,
        To: 30000,
        ToDate: Date("2019-12-07"),
        fromDate: Date("2019-06-07"),
        Type: "3"
      },
      {
        Company: companyAle._id,
        From: 10000,
        To: 30000,
        ToDate: Date("2019-12-07"),
        fromDate: Date("2019-06-07"),
        Type: "2"
      },
      {
        Company: companyHanoi._id,
        From: 10000,
        To: 30000,
        ToDate: Date("2019-12-07"),
        fromDate: Date("2019-06-07"),
        Type: "1"
      }
    );
  }
);

//SEGUIR A PARTIR DE ACAAAAAAA

//   {
//     model: "Company",
//     documents: [
//       {
//         CompanyName: "HanoiInc",
//         Description: "Hanoi owns this company",
//         Address: "Av. HanoiInc 123",
//         Country: "Argentina",
//         Telephone: "61059032",
//         MainContact: {
//           FirstName: "Hanoi",
//           LastName: "Hanoi LastName",
//           IdType: "Cedula",
//           IdNum: "61059032",
//           Email: "hanoi@hanoi.com"
//         },
//         BankAccountInfo: {
//           Bank: "Banco",
//           AccountType: "Bla",
//           AccountNumber: "61059032",
//           Curency: "Pesos ARG",
//           SwiffCode: "que"
//         },
//         Commission: [
//           {
//             Company: "HanoiInc",
//             From: 10000,
//             To: 30000,
//             ToDate: 2019 - 09 - 06,
//             FromDate: 2019 - 12 - 06,
//             Type: "1"
//           }
//         ]
//       },
//       {
//         CompanyName: "AleInc",
//         Description: "Ale owns this company",
//         Adress: "Av. AleInc 123",
//         Country: "Argentina",
//         Telephone: "61059032",
//         MainContact: {
//           FirstName: "Ale",
//           LastName: "Ale LastName",
//           IdType: "Cedula",
//           IdNumber: "61059032",
//           Email: "Ale@Ale.com"
//         },
//         BankAccountInfo: {
//           Bank: "Banco",
//           AccountType: "Bla",
//           AccountNumber: "61059032",
//           Curency: "Pesos ARG",
//           SwiffCore: "que"
//         },
//         Commission: {
//       },
//       {
//         CompanyName: "JoacoInc",
//         Description: "Joaco owns this company",
//         Adress: "Av. JoacoInc 123",
//         Country: "Argentina",
//         Telephone: "61059032",
//         MainContact: {
//           FirstName: "Joaco",
//           LastName: "Joaco LastName",
//           IdType: "Cedula",
//           IdNumber: "61059032",
//           Email: "Joaco@Joaco.com"
//         },
//         BankAccountInfo: {
//           Bank: "Banco",
//           AccountType: "Bla",
//           AccountNumber: "61059032",
//           Curency: "Pesos ARG",
//           SwiffCore: "que"
//         },
//         Commission: {
//           Company: "JoacoInc",
//           From: 10.0,
//           To: 30.0,
//           ToDate: 2019 - 09 - 06,
//           FromDate: 2019 - 12 - 06,
//           Type: "3"
//         }
//       },
// {
//   CompanyName: "JuanmaInc",
//   Description: "Juanma owns this company",
//   Adress: "Av. JuanmaInc 123",
//   Country: "Argentina",
//   Telephone: "61059032",
//   MainContact: {
//     FirstName: "Juanma",
//     LastName: "Juanma LastName",
//     IdType: "Cedula",
//     IdNumber: "61059032",
//     Email: "Juanma@Juanma.com"
//   },
//   BankAccountInfo: {
//     Bank: "Banco",
//     AccountType: "Bla",
//     AccountNumber: "61059032",
//     Curency: "Pesos ARG",
//     SwiffCore: "que"
//   },
//   Commission: {
//     Company: "JuanmaInc",
//     From: 10.0,
//     To: 30.0,
//     ToDate: 2019 - 09 - 06,
//     FromDate: 2019 - 12 - 06,
//     Type: "4"
//   }
// },
// {
//   CompanyName: "LianInc",
//   Description: "Lian owns this company",
//   Adress: "Av. LianInc 123",
//   Country: "Argentina",
//   Telephone: "61059032",
//   MainContact: {
//     FirstName: "Lian",
//     LastName: "Lian LastName",
//     IdType: "Cedula",
//     IdNumber: "61059032",
//     Email: "Lian@Lian.com"
//   },
//   BankAccountInfo: {
//     Bank: "Banco",
//     AccountType: "Bla",
//     AccountNumber: "61059032",
//     Curency: "Pesos ARG",
//     SwiffCore: "que"
//   },
//   Commission: {
//     Company: "LianInc",
//     From: 10.0,
//     To: 30.0,
//     ToDate: 2019 - 09 - 06,
//     FromDate: 2019 - 12 - 06,
//     Type: "5"
//   }
// }
//     ]
//   },
//   {
//     model: "CompanyAdmin",
//     documents: [
//       {
//         Email: "hanoi@hanoi.com",
//         Password: "admin",
//         Company: "HanoiInc"
//       },
//       {
//         Email: "joaco@joaco.com",
//         Password: "admin",
//         Company: "JoacoInc"
//       },
//       {
//         Email: "alejo@alejo.com",
//         Password: "admin",
//         Company: "AlejoInc"
//       },
//       {
//         Email: "lian@lian.com",
//         Password: "admin",
//         Company: "LianInc"
//       },
//       {
//         Email: "juanma@juanma.com",
//         Password: "admin",
//         Company: "JuanmaInc"
//       }
//     ]
//   },
//   {
//     model: "Salesperson",
//     document: [
//       {
//         Email: "hanoi@hanoi.com",
//         Password: "salesperson",
//         FistName: "Hanoi",
//         LastName: "Hanoi LastName",
//         Company: "HanoiInc",
//         Telephone: "61059032",
//         Photo:
//           "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
//         Notes: "Notas SOBRE el vendedor o DEL vendedor?",
//         CommissionScheme: "6"
//       },
//       {
//         Email: "lian@lian.com",
//         Password: "salesperson",
//         FistName: "Lian",
//         LastName: "Lian LastName",
//         Company: "LianInc",
//         Telephone: "61059032",
//         Photo:
//           "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
//         Notes: "Notas SOBRE el vendedor o DEL vendedor?",
//         CommissionScheme: "6"
//       },
//       {
//         Email: "joaco@joaco.com",
//         Password: "salesperson",
//         FistName: "Joaco",
//         LastName: "Joaco LastName",
//         Company: "JoacoInc",
//         Telephone: "61059032",
//         Photo:
//           "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
//         Notes: "Notas SOBRE el vendedor o DEL vendedor?",
//         CommissionScheme: "6"
//       },
//       {
//         Email: "alejo@alejo",
//         Password: "salesperson",
//         FistName: "Alejo",
//         LastName: "Alejo LastName",
//         Company: "AlejoInc",
//         Telephone: "61059032",
//         Photo:
//           "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
//         Notes: "Notas SOBRE el vendedor o DEL vendedor?",
//         CommissionScheme: "6"
//       },
//       {
//         Email: "juanma@juanma",
//         Password: "salesperson",
//         FistName: "Juanma",
//         LastName: "Juanma LastName",
//         Company: "JuanmaInc",
//         Telephone: "61059032",
//         Photo:
//           "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png",
//         Notes: "Notas SOBRE el vendedor o DEL vendedor?",
//         CommissionScheme: "6"
//       }
//     ],
//     model: "CarRental",
//     documents: [
//       {
//         Name: "Pepe Rental",
//         Logo:
//           "https://www.stickpng.com/assets/images/5a2ae85adb68181c8f184d6f.png",
//         Url: "", //viene de la api
//         User: "", //viene de la api
//         Password: "", //viene de la api
//         MainContact: {
//           FirstName: "Pepe",
//           LastName: "Casagrande",
//           Email: "peperent@hotmail.com"
//         }
//       },
//       {
//         Name: "Pepe Rental",
//         Logo:
//           "https://media.staticontent.com/media/pictures/4dbee6c4-b9b7-4300-9330-db685c4400c2.png",
//         Url: "", //viene de la api
//         User: "", //viene de la api
//         Password: "", //viene de la api
//         MainContact: {
//           FirstName: "Guido",
//           LastName: "Brown",
//           Email: "guidobrown@despegar.com"
//         }
//       },
//       {
//         Name: "Miriam Rent a Car",
//         Logo:
//           "http://edicion.ypf.com/serviclub/Catalogo/Lists/ImagenesBeneficios/street_rent_a_car-ypf-beneficio-serviclub.jpg",
//         Url: "", //viene de la api
//         User: "", //viene de la api
//         Password: "", //viene de la api
//         MainContact: {
//           FirstName: "Miriam",
//           LastName: "Muller",
//           Email: "miriamrentacar@gmail.com"
//         }
//       },
//       {
//         Name: "Han Oy Rental",
//         Logo:
//           "https://d12z4gz8sifrx.cloudfront.net/assets/media//madrid-portada-landing-rent-a-car-low-cost-pepecar.jpg",
//         Url: "", //viene de la api
//         User: "", //viene de la api
//         Password: "", //viene de la api
//         MainContact: {
//           FirstName: "Han",
//           LastName: "Oy",
//           Email: "hanoy@hotmail.com"
//         }
//       },
//       {
//         Name: "Alfred Agency",
//         Logo:
//           "https://media.glassdoor.com/sqll/2485315/carone-supermercados-squarelogo-1553125336866.png",
//         Url: "", //viene de la api
//         User: "", //viene de la api
//         Password: "", //viene de la api
//         MainContact: {
//           FirstName: "Alfred",
//           LastName: "Pury",
//           Email: "joaquinlarralde@hotmail.com"
//         }
//       }
//     ]
//   }
// ];
