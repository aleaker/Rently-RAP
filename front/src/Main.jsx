//Imports de Modulos
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import RentalFormContainer from "./RentalForm/RentalFormContainer";
import AbmEmpresasContainer from './abmEmpresas/AbmEmpresasContainer'
import Comission from "./Comissions/Comission";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/comisiones" component={Comission} />
          <Route exact path="/" component={Reservation} />
          <Route
            exact
            path="/registerRental"
            render={() => <RentalFormContainer />}
          />
          <Route
          exact path='/abmempresas'
          render={()=> <AbmEmpresasContainer/>}/>
        </Switch>
      </div>)
  }}
