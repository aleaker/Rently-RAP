import React from "react";
import { connect } from "react-redux";
import ListaEmpresas from "../ListaEmpresas";
import { fetchCompanies } from "../../store/actions/company";

const mapStateToProps = ({ company }) => ({
  companies: company.list
});

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaEmpresas);
