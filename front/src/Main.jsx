//Imports de Modulos
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

// Imports de Containers
import Reservation from './reservationForm/reservationForm'


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
          <div>  
            <Reservation/>
          </div>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Main);
