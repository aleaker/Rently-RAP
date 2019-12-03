import axios from "axios";
import { ADD_SALESPERSON } from "../constants";

export const addSalesperson = salesperson => ({
  type: ADD_SALESPERSON,
  payload: axios
    .post("/api/user", salesperson)
    .then(res => {
      if (res.data === "ERROR") {
        return alert("No se ha podido añadir al vendedor");
      } else {
        return res.data;
      }
    })
    .catch(err => {
      console.log(err);
    })
});
