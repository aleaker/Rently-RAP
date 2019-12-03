import axios from "axios";

export const addComission = state => {
  return axios
    .post(`/api/adminEmpresas/add/comissions`, state)
    .then(data => data);
};
