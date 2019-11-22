import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'


class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  getToken(){
    axios.get('/api/token/get')
    .then(resp=>console.log(resp))
    
  }


  render() {
    let today = new Date
    let todayFormated = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let tomorrowFormated = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+1}`
    return (
        <div className="col sm3">
          <form>
                <label for="start">Start date:</label>
                <input type="date" id="start" name="trip-start"
                value={todayFormated}
                min={todayFormated} max="2020-12-31"></input>
                <label for="start">To date:</label>
                <input type="date" id="end" name="trip-ends"
                value={tomorrowFormated}
                min={todayFormated} max="2020-12-31"></input>
                <label>Lugar de Retiro</label>
                <div className="input-field col s12">
                    <select className="browser-default">
                        <option value="1">Belgrano</option>
                        <option value="2">En la casa de tu vieja</option>
                    </select>
                </div>
                <label>Edad</label>
                <div className="input-field col s12">
                    <select className="browser-default">
                        <option value="true">Mayor a 25</option>
                        <option value="false">Menor a 25</option>
                    </select>
                </div>
                <label>Kilometros Diarios</label>
                <div className="input-field col s12">
                    <select className="browser-default">
                        <option value="true">Km Ilimitados</option>
                        <option value="false">200 Km diarios</option>
                    </select>
                </div>
                <button onClick={this.getToken}>Buscar</button>
          </form>
          <button onClick={this.getToken}>Buscar</button>
        </div>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Reservation);
