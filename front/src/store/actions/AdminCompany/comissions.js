import axios from "axios";

export const comissionsEdit = function(commission) {
  return {
    type: "COMMISSION_EDIT",
    commission
  };
};

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

export const fetchCommission = id => dispatch => {
  return axios
    .get(`/api/adminEmpresas/comissions/edit/${id}`)
    .then(commission => dispatch(comissionsEdit(commission.data[0])));
};
