import axios from "axios";

export const searchCarRentals = carRentals => ({
  type: "SEARCH_CAR_RENTALS",
  carRentals
});

export const registerRental = rental => {
  //dispatch =>{
  console.log("Creando...", rental);
  axios.post("/api/rentalRouter", rental).then(res => console.log(res.data));
};

export const fetchCarRentals = () => dispatch =>
  axios
    .get("/api/rentalRouter")
    .then(res => res.data)
    .then(carRentals => dispatch(searchCarRentals(carRentals)));

export const deleteCarRental = carRental => dispatch => {
  axios
    .put(`/api/rentalRouter/deactivateRental/${carRental._id}`)
    .then(dispatch(fetchCarRentals()));
};

export const saveCarRentalHistory = carRental => dispatch => {
  axios.put(`/api/rentalRouter/saveCarRentalHistory/${carRental._id}`,carRental)
}

export const editCarRental = carRental => dispatch=>{
  console.log("por editaRRR",carRental);
  axios.put(`/api/rentalRouter/editCarRental/${carRental._id}`, carRental)
  .then(dispatch(fetchCarRentals()));

}