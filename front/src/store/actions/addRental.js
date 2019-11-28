import axios from "axios";

export const registerRental = rental => {
  //dispatch =>{
  axios.post("/api/registerRental", rental).then(res => res.data);
};
