//Imports de Modulos
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, browserHistory } from "react-router-dom";
// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import Login from "./login/Login";
import RentalFormContainer from "./RentalForm/RentalFormContainer";
import AbmEmpresasContainer from "./abmEmpresas/AbmEmpresasContainer";
import Comission from "./Comissions/Comission";
import RentalTableContainer from "./RentalForm/RentalTableContainer"
import * as actions from "./store/actions/userActions";
import { useEffect } from "react";
import { bindActionCreators } from "redux";

const Main = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div>
      {!props.user ? (
        "loading"
      ) : 
      typeof props.user !== "string" ? (  // EL CONDICIONAL ESTA NEGADO POR COMODIDAD
        <Login />
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/rentalTable" render={()=> <RentalTableContainer/>} />
          

          <Route exact path="/" component={Reservation} />
          {/* <Route exact path="/comisiones" component={Comission} />  */}
          <Route
            exact
            path="/registerRental"
            render={() => <RentalFormContainer />}
          />
          <Route
            exact
            path="/abmempresas"
            render={() => <AbmEmpresasContainer />}
          />
        </Switch>
      )}
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);


