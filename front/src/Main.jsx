//Imports de Modulos
import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
//Imports de Containers
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
import ShowThem from "./AdminEmpresa/Salespeople/ShowThem";
import ShowInactive from "./AdminEmpresa/Salespeople/ShowInactive";
import EditSalesperson from "./AdminEmpresa/Salespeople/EditSalesperson";
import CreateSalesperson from "./AdminEmpresa/Salespeople/CreateSalesperson";
import Admins from "./AdminEmpresa/Salespeople/Admins";
import EditAdmin from "./AdminEmpresa/Salespeople/EditAdmin";

const Main = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.fetchUser().then(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        ""
      ) : !props.user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/rentalTable"
            render={() => <RentalTableContainer />}
          />
          <Route exact path="/companylist" component={ListaEmpresasContainer} />

          <Route exact path="/reservation" component={Reservation} />

          <Route exact path="/comisiones" component={comisionTable} />

          <Route exact path="/AdminEmpresa/vendedores" component={ShowThem} />
          <Route
            exact
            path="/AdminEmpresa/vendedores/inactivos"
            component={ShowInactive}
          />
          <Route
            exact
            path="/AdminEmpresa/crear/vendedor"
            component={CreateSalesperson}
          />
          <Route
            exact
            path="/AdminEmpresa/editar/vendedor/:id"
            component={EditSalesperson}
          />
          <Route exact path="/AdminEmpresa/admins" component={Admins} />
          <Route exact path="/AdminEmpresa/editar/:id" component={EditAdmin} />
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
