//Imports de Modulos
import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// Imports de Containers
import Reservation from "./reservationForm/reservationForm";
import Login from "./login/Login";
import RentalFormContainer from "./RentalForm/RentalFormContainer";
import AbmEmpresasContainer from "./abmEmpresas/AbmEmpresasContainer";
import Comission from "./comisiones/comisionTable";
import RentalTableContainer from "./RentalForm/RentalTableContainer";
import * as actions from "./store/actions/userActions";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import Dashboard from "./dashboard/Dashboard";
import comisionTable from "./comisiones/comisionTable";
import ListaEmpresasContainer from "./abmEmpresas/Containers/ListaEmpresasContainer";

const Main = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.fetchUser().then((user) => {
      setLoading(false)});
  }, []);
  return (
    <div>
      {loading ? (
        ""
      ) : !props.user ? (
        <Login />
      ) : <div>
          
          <Route exact path="/" component={Dashboard} />

          <Route
            exact
            path="/rentalTable"
            component={RentalTableContainer}
          />
          <Route exact path="/companylist" component={ListaEmpresasContainer} />

          <Route exact path="/reservation" component={Reservation} />

          <Route exact path="/comisiones" component={comisionTable} />
          <Route
            exact
            path="/registerRental"
            component={RentalFormContainer}
          />
          <Route
            exact
            path="/abmempresas"
            component={AbmEmpresasContainer}
          />
          <Route
            exact
            path="/abmempresas/edit"
            component={Reservation}
          />
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
