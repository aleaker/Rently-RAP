import axios from "axios";

export const searchCarRentals = carRentals => ({
  type: "SEARCH_CAR_RENTALS",
  carRentals
});

export const registerRental = rental => {
  //dispatch =>{
  console.log("hola", rental);
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
