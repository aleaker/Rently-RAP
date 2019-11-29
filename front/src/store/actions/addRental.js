import axios from "axios";

export const searchCarRentals = carRentals => ({
  type: "SEARCH_CAR_RENTALS",
  carRentals
})


export const registerRental = rental => {
  //dispatch =>{
  console.log("hola", rental);
  axios.post("/api/registerRental", rental).then(res => console.log(res.data));
};


export const fetchCarRentals = () => dispatch =>
  axios.get("/api/carRental")
  .then(res=>res.data)
  .then(carRentals => dispatch(searchCarRentals(carRentals)))

export const deleteCarRental = (carRental) => dispatch =>{
  axios.delete(`/api/carRental/${carRental._id}`)
  .then(dispatch(fetchCarRentals())) 
}
