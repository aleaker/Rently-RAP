import axios from "axios";
export const registerRental = (rental) => {//dispatch =>{
  console.log("hola");
  axios
    .post("/api/registerRental", 
      rental
    )
    .then(res => console.log(res.data));
}