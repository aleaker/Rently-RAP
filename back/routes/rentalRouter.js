const { getCity } = require("../cities");
const { fetchToken } = require("../ApiRental/RentalAPIs");
const request = require("request-promise-native");
const router = require("express").Router();
const CarRental = require("../models/CarRental");
const Commission = require("../models/Commission");

router.post("/", (req, resp) => {
  Commission.create(req.body.CommissionScheme[0]) //creo un esquema de comisiones
    .then(createdCommission => {
      let obj = req.body; //Guardo la data de rentadora en un obj
      obj.CommissionScheme = createdCommission._id; //le agego el id del esquema creado a ese obj
      return CarRental.create(obj);
    })
    .then(createdCarRental => console.log("createdCarRental", createdCarRental))
    .catch(err => console.log("Error: ", err));
});

router.get("/", (req, res) => {
  CarRental.find({ Active: true })
    .then(carRentals => res.json(carRentals))
    .catch(err => console.log(err));
});

router.post("/getRentalsByName", (req, resp) => {
  console.log("RQBODI", req.body);
  let s = req.body;
  const cities = getCity()[req.body.location];
  const token = fetchToken()[0];
  const rentals = Object.keys(cities);
  rentals.map(rental => {
    token.rental;
  });
  console.log("soy el token", token);
  const options = {
    uri: `${token.Url}/search?searchModel.from=${s.startDate} ${s.startHour}&searchModel.to=${s.endDate} ${s.endHour}&searchModel.fromPlace=${s.FromPlace}&searchModel.toPlace=${s.ToPlace}&searchModel.promotion&searchModel.ilimitedKm=${s.IllimitedKm}&searchModel.onlyFullAvailability=${s.OnlyFullAvailability}&searchModel.customerItsOver25=${s.Age}`,
    method: "GET",
    headers: { Authorization: `${token.Token}` }
  };
  request(options, (error, res, body) => {
    if (error) {
      console.error(error);
      return;
    }
    resp.json(JSON.parse(body));
  });
});

// Promise.all(req.body.rentadorasConId.map((rentadoraObj)=> CarRental.find({Name:Object.keys(rentadoraObj)[0]}).then(rentadora=>console.log("rentadoras",rentadora)))

//)

router.put("/deactivateRental/:id", (req, res) => {
  CarRental.update({ _id: req.params.id }, { Active: false }).then(carRental =>
    carRental.update(carRental)
  );
});

router.put("/saveCarRentalHistory/:id", (req, res) => {
  let objConTodo = req.body;
  let { ModificationHistory, ...objFiltrado } = objConTodo;
  CarRental.findByIdAndUpdate(req.params.id, {
    $push: { ModificationHistory: objFiltrado } //pusheo al array el obj sin su array ModificationHistory
  }).then(edited => res.json(edited));
});

router.put("/editCarRental/:id", (req, res) => {
  let objConTodo = req.body;
  let { ModificationHistory, ...objFiltrado } = objConTodo;
  CarRental.findByIdAndUpdate(req.params.id, objFiltrado).then(edited =>
    res.json(edited)
  );
});

module.exports = router;
