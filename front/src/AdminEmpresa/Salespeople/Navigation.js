import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../AdminEmpresa/AdminEmpresa.css";

export default class AdminEmpresaNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/AdminEmpresaNav/vendedores">
            Admin Empresa:
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/AdminEmpresaNav/vendedores">
                  Mis vendedores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AdminEmpresaNav/crear/vendedor">
                  Crear vendedor
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/AdminEmpresaNav/vendedores/inactivos"
                >
                  Vendedores inactivos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
