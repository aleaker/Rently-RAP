import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminEmpresaNav from "./Navigation";
import { connect } from "react-redux";

class ShowThem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salespeople: []
    };
  }
  componentDidMount() {
    this.getActiveSalespeople();
  }

  getActiveSalespeople() {
    axios
      .get("http://localhost:3000/api/salespeople")
      .then(res => this.setState({ salespeople: res.data }));
  }

  deactivate(id) {
    axios.put("http://localhost:3000/api/salespeople/" + id);
    this.getActiveSalespeople();
  }

  render() {
    return (
      <div className="container">
        <AdminEmpresaNav />
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
                    Editar
                  </Link>
                </div>
                <div className="card-body">
                  <p>{salesperson.Email}</p>
                  <p>Inserte esquema de comision aca</p>
                  <p>Inserte foto aca</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deactivate(salesperson._id)}
                  >
                    Dar de baja
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
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShowThem);
