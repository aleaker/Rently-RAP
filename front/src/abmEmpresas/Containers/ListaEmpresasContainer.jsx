import React from "react";
import { connect } from "react-redux";
import ListaEmpresas from "../ListaEmpresas";
import { fetchCompanies, deleteCompany } from "../../store/actions/company";

const mapStateToProps = ({ company }) => ({
  companies: company.list
});

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  deleteCompany: id => dispatch(deleteCompany(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaEmpresas);
