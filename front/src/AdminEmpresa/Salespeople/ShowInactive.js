import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminEmpresaNav from "./Navigation";
import { connect } from "react-redux";

class ShowInactive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salespeople: []
    };
  }
  componentDidMount() {
    this.getInactiveSalespeople();

  }

  componentDidUpdate (prevProps, prevState) {
    if(this.props.match != prevProps.match){
    this.getInactiveSalespeople()}
  }
  getInactiveSalespeople() {
    axios
      .get(`http://localhost:3000/api/${this.props.match.path.split('/')[2] == 'admins'?'admin':'salespeople'}/deactivated/${this.props.user.Company}`)
      .then(res => this.setState({ salespeople: res.data }));
  }

  reactivate(id) {
    console.log("ENTRE A LA RUTA DEL FRONT");
    axios.put("http://localhost:3000/api/reactivate/" + id);
    this.getInactiveSalespeople();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.salespeople.map(salesperson => (
            <div className="col-md-4 p-2" key={salesperson._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{salesperson.FirstName + " " + salesperson.LastName}</h5>
                  <Link
                    className="btn waves-effect waves-light"
                    to={"/AdminEmpresa/editar/vendedor/" + salesperson._id}
                  >
                    EDITAR
                  </Link>
                </div>
                <div className="card-body">
                  <p>{salesperson.Email}</p>
                  <p>Inserte esquema de comision aca</p>
                  <p>Inserte foto aca</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.reactivate(salesperson._id)}
                  >
                    Dar de alta
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

const mapStateToProps = ({ user }) => ({
  user: user
});

export default connect(mapStateToProps, null)(ShowInactive);
