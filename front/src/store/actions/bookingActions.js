import axios from "axios";

export const fetchBooking = function(data) {
  console.log("DATA", data);
  return function(dispatch) {
    return axios
      .post("/api/booking", data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };
};
