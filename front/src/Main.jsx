//Imports de Modulos
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
import store from './store/index'

// Imports de Containers
import AbmEmpresasContainer from './abmEmpresas/AbmEmpresasContainer'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
          
            <AbmEmpresasContainer/>
           
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Main);
