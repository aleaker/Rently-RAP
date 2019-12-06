import axios from "axios";

export const addComission = state => {
  return axios
    .post(`/api/adminEmpresas/add/comissions`, state)
    .then(data => data);
};

export const editComission = (id, state) => {
  return axios
    .put(`/api/adminEmpresas/comissions/edit/${id}`, state)
    .then(data => data);
};

export const fetchComission = id => {
  return axios
    .get(`/api/adminEmpresas/comissions/edit/${id}`)
    .then(data => console.log(data));
};
