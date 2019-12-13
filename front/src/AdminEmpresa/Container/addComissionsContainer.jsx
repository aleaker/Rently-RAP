import React from "react";
import { connect } from "react-redux";
import addComissions from "../Components/addComissions";

const mapStateToProps = ({ user }) => ({
  user: user
});

export default connect(
  mapStateToProps,
  null
)(addComissions);
