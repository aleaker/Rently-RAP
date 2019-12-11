import React from "react";
import { connect } from "react-redux";
import editComission from "../Components/editComission";
import { fetchCommission } from "../../store/actions/AdminCompany/comissions";

const mapStateToProps = ({ commission }) => ({
  commission: commission.commissionEdit
});

const mapDispatchToProps = dispatch => ({
  fetchCommission: id => dispatch(fetchCommission(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editComission);
