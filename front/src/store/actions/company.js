import axios from "axios";

export const listCompanies = function(companies) {
  return {
    type: "LIST_COMPANY",
    companies
  };
};

export const fetchCompanies = () => dispatch => {
  return axios
    .get("/api/company")
    .then(companies => dispatch(listCompanies(companies.data)))
    .catch(err => console.log(err));
};

export const updateCompany = id => dispatch => {
  return axios.put(`/api/company/${id}`).then(data => dispatch());
};