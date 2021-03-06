import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      startDate: '',
      startHour: '',
      endDate: '',
      endHour: '',
      location: 1,
      age: true,
      unlimitedKm: true,
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }
  componentDidMount() {
  }

  getToken(){
    axios.get('/api/token/get')
    .then(resp=>console.log(resp)) 
  }

  getCars(){
    axios.post('/api/searchcars/get', {From: `${this.state.startDate} ${this.state.startHour}`,
                                      To: `${this.state.endDate} ${this.state.endHour}`,
                                      FromPlace: this.state.location,
                                      ToPlace: this.state.location,
                                      IllimitedKm: this.state.unlimitedKm,
                                      Age: this.state.age,
                                      OnlyFullAvailability: true,  
  })
    .then(resp=>this.setState({cars: resp.data})).then(()=> console.log(this.state)) 
  }

  handleStartDate(date){
    const dateArray = date.split('-')
    const dateFormated = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    this.setState({startDate: dateFormated})
  }

  handleEndDate(date){
    const dateArray = date.split('-')
    const dateFormated = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    this.setState({endDate: dateFormated})
  }

  handleStartTime(time){
    this.setState({startHour: time})
  }

  handleEndTime(time){
    this.setState({endHour: time})
  }

  handleLocation(location){
    this.setState({location:parseInt(location)})
    console.log(this.state.location)
  }

  handleAge(age){asdasad
    const boolAge = !!parseInt(age)
    this.setState({age: boolAge})
  }

  handleKm(km){
    const boolKm = !!parseInt(km)
    this.setState({unlimitedKm: boolKm})
  }

  render() {
    let today = new Date
    let todayFormated = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let tomorrowFormated = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+1}`
    console.log(this.state)
    return (
        <div className="col sm3">
          <form>
                <label htmlFor="start">Start date:</label>
                <input type="date" id="start" name="trip-start"
                min={todayFormated} max="2020-12-31"
                onChange={evt=> this.handleStartDate(evt.target.value)}
                />
                <input type="time" 
                onChange={evt=> this.handleStartTime(evt.target.value)}
                />
                <label htmlFor="start">To date:</label>
                <input type="date" id="end" name="trip-ends"
                min={todayFormated} max="2020-12-31"
                onChange={evt=> this.handleEndDate(evt.target.value)}
                />
                <input type="time"
                onChange={evt=> this.handleEndTime(evt.target.value)}
                />
                <label>Lugar de Retiro</label>
                <div className="input-field col s12">
                    <select className="browser-default"
                    onChange={evt=> this.handleLocation(evt.target.value)}
                    >
                        <option value="1">Oficina Central</option>
                        <option value="2">Aeropuerto de Ezeiza</option>
                        <option value="3">Aeroparque</option>
                        <option value="4">Shopping Unicenter</option>
                        <option value="5">CABA</option>
                    </select>
                </div>
                <label>Edad</label>
                <div className="input-field col s12">
                    <select className="browser-default"
                     onChange={evt=> this.handleAge(evt.target.value)}
                    >
                        <option value={1}>Mayor a 25</option>
                        <option value={0}>Menor a 25</option>
                    </select>
                </div>
                <label>Kilometros Diarios</label>
                <div className="input-field col s12">
                    <select className="browser-default"
                    onChange={evt=> this.handleKm(evt.target.value)}
                    >
                        <option value="1">Km Ilimitados</option>
                        <option value="0">200 Km diarios</option>
                    </select>
                </div>
          </form>
          <button onClick={this.getCars}>Search Cars</button>

        <div>

        </div>
          {this.state.cars.map(car=> 
          <Card>
            <Col md={4}>
          <img src={(car.Car.Model.ImagePath)} style={{width:'100%'}} key={Math.random()}/>
          </Col>
          </Card>)}
        </div>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Reservation);
