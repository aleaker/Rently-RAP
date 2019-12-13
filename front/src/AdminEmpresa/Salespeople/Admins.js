import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminEmpresaNav from "./Navigation";

export default class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: []
    };
  }
  componentDidMount() {
    this.getActiveAdmins();
  }

  getActiveAdmins() {
    axios
      .get("http://localhost:3000/api/companyAdmins")
      .then(res => this.setState({ admins: res.data }));
  }

  deactivate(id) {
    axios.put("http://localhost:3000/api/companyAdmin/off/" + id);
    this.getActiveSalespeople();
  }

  render() {
    return (
      <div className="container">
        <AdminEmpresaNav />
        <div className="row">
          {this.state.admins.map(admin => (
            <div className="col-md-4 p-2" key={admin._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{admin.FirstName + " " + admin.LastName}</h5>
                  {/* <Link
                    className="btn btn-secondary"
                    to={"/AdminEmpresa/editar/otroAdmin/" + admin._id}
                  >
                    Editar
                  </Link> */}
                </div>
                <div className="card-body">
                  <p>{admin.Email}</p>
                  <p>Inserte esquema de comision aca</p>
                  <p>Inserte foto aca</p>
                </div>
                <div className="card-footer">
                  <Link
                    className="btn waves-effect waves-light"
                    to={"/AdminEmpresa/editar/" + admin._id}
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
