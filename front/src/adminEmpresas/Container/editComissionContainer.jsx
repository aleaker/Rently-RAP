import React from "react";
import { connect } from "react-redux";
import editComission from "../Components/editComission";
import { fetchComission } from "../../store/actions/AdminCompany/comissions";

/* const mapStateToProps = ({ user }) => ({
  user: user
}); */

/* const mapDispatchToProps = dispatch => ({
  fetchComission: id => dispatch(fetchComission(id))
}); */

export default connect(
  null,
  null
)(editComission);
