//Imports de Modulos
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import RentalFormContainer from "./RentalForm/RentalFormContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <Reservation /> */}
        <Switch>
          <Route
            exact
            path="/addRental"
            render={() => <RentalFormContainer />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(null, null)(Main);
