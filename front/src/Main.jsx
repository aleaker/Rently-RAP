//Imports de Modulos
import React from "react";
import { connect } from "react-redux";
import {Switch,Route} from "react-router-dom"
// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import Login from "./login/Login";
import RentalFormContainer from "./RentalForm/RentalFormContainer";
// import Comission from "./Comissions/Comission";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/comisiones" component={Comission} /> */}
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/registerRental"
            render={() => <RentalFormContainer />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  null
)(Main);
