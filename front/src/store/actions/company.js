import axios from "axios";

export const listCompanies = function(companies) {
  return {
    type: "LIST_COMPANY",
    companies
  };
};

export const companyRemove = function(companyId) {
  return {
    type: "DELETE_COMPANY",
    companyId
  };
};

export const fetchCompanies = () => dispatch => {
  return axios
    .get("/api/company/activeList")
    .then(companies => dispatch(listCompanies(companies.data)))
    .catch(err => console.log(err));
};

export const deleteCompany = id => dispatch => {
  return axios
    .delete(`/api/company/${id}`)
    .then(company =>
      company.status === 200 ? dispatch(companyRemove(id[0])) : "Cannot Updated"
    );
};
