import axios from "axios";

export const addRental = () => dispatch =>
  axios
    .post("http://localhost:3000/api/addRental", {
      rental
    })
    .then(res => res.data);
