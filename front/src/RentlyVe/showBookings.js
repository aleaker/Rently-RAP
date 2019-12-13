import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }
  componentDidMount() {
    this.getAllBookings();
  }

  getAllBookings() {
    axios
      .get("http://localhost:3000/api/booking")
      .then(res => this.setState({ bookings: res.data }));
  }

  cancelar(id) {
    axios
      .put("http://localhost:3000/api/booking/cancel/" + id)
      .then(() => this.getAllBookings());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.bookings.map(booking => (
            <div className="col-md-4 p-2" key={booking._id}>
              {console.log(this.state)}
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{booking.Company.CompanyName}</h5>
                  <Link
                    className="btn waves-effect waves-light"
                    to={"/reserva/editar/" + booking._id}
                  >
                    Editar
                  </Link>
                </div>
                <div className="card-body">
                  <p>Estado: {booking.Status}</p>
                  <p>Rentadora: {booking.CarRental.Name}</p>
                  <p>Desde: {booking.FromDate}</p>
                  <p>Hasta: {booking.ToDate}</p>
                  <p>Retiro y entrega: {booking.Pickup}</p>
                  <p>Vendedor: {booking.Salesperson.FirstName}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.cancelar(booking._id)}
                  >
                    Cancelar reserva
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ShowBookings;
