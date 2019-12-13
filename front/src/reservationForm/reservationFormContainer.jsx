import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import _ from "lodash";
import RenderedCars from "./renderedCarsComponent";
import ReservationFormComponent from "./reservationFormComponent";
//import {fetchCities} from "../../../back/cities"

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: true,
      endDate: "03/07/2020",
      endHour: "",
      location: "",
      startDate: "03/01/2020",
      startHour: "",
      unlimitedKm: true,
      cars: [],
      cities: {},
    };
    // this.getCars = this.getCars.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleKm= this.handleKm.bind(this);
  }
  componentDidMount() {
    axios
    .get("/api/rentalRouter/getCities")
    .then(resp => this.setState({ cities: resp.data, location:resp.data[0] }))
  }
  

  getToken() {
    axios.get("/api/token/get,,")
  }

  handleStartDate(date) {
    const dateArray = date.split("-");
    const dateFormated = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    this.setState({ startDate: dateFormated });
  }

  handleEndDate(date) {
    const dateArray = date.split("-");
    const dateFormated = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    this.setState({ endDate: dateFormated });
  }

  handleStartTime(time) {
    this.setState({ startHour: time });
  }

  handleEndTime(time) {
    this.setState({ endHour: time });
  }

  handleAge(age) {
   
    const boolAge = !!parseInt(age);
    this.setState({ age: boolAge });
  }

  handleKm(km) {
    const boolKm = !!parseInt(km);
    this.setState({ unlimitedKm: boolKm });
  }

  handleLocation(location) {
    //Object.keys(this.state.cities[location])
    this.setState({ location: location });
  
    //console.log("RENTADORA?",Object.keys(this.state.rentadorasConId))
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
    .post("/api/rentalRouter/getRentalsByName", this.state)
    .then(e => {this.setState({ cars: e.data })});
    
  }

  render() {
    let today = new Date();
    let todayFormated = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`;
    let tomorrowFormated = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate() + 1}`;

    return (
      <div>
        <ReservationFormComponent
        selectedStartDate={this.state.startDate}
          handleAge={this.handleAge}
          handleEndDate={this.handleEndDate}
          handleEndTime={this.handleEndTime}
          handleStartDate={this.handleStartDate}
          handleStartTime={this.handleStartTime}
          handleKm={this.handleKm}
          handleLocation={this.handleLocation}
          handleSubmit={this.handleSubmit}
          cities={this.state.cities}
        />

       {console.log(this.state.cars),this.state.cars.map((car, i)=><RenderedCars key={i} car={car} />)} 
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(null, null)(Reservation);
