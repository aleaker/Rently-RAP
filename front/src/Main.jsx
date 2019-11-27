//Imports de Modulos
import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import Login from "./login/Login";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <Login/> */}
        <Reservation />
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(null, null)(Main);
