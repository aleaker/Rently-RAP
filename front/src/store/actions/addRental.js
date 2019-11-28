import axios from "axios";
export const registerRental = (rental) => {//dispatch =>{
  console.log("hola", rental);
  axios
    .post("/api/registerRental", 
      rental
    )
    .then(res => console.log("respuesta",res));
}