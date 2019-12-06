import React, { Component } from "react";
import axios from "axios";
import AdminEmpresaNav from "./Navigation";

export default class EditAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Company: "",
      Email: "",
      Password: "",
      Telephone: "",
      UserType: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    // this.handleChangePhoto = this.handleChangePhoto.bind(this);
  }

  componentDidMount() {
    console.log("ENTRO AL COMPONENT DID MOUNT");
    this.getAdmin(this.props.match.params.id);
  }

  getAdmin(id) {
    axios.get("http://localhost:3000/api/companyAdmin/" + id).then(res => {
      this.setState({
        FirstName: res.data.FirstName,
        LastName: res.data.LastName,
        Company: res.data.Company,
        Email: res.data.Email,
        Password: res.data.Password,
        Telephone: res.data.Telephone,
        UserType: res.data.Usertype
      });
    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handleChangePhoto(e) {
  //   this.setState({ Photo: e.target.value });
  // }

  onSubmit(e) {
    e.preventDefault();
    const edit = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Company: this.state.Company,
      Email: this.state.Email,
      Password: this.state.Password,
      Telephone: this.state.Telephone,
      UserType: this.state.UserType
    };

    axios.put(
      "http://localhost:3000/api/admin/edit/" + this.props.match.params.id,
      edit
    );
    this.getAdmin(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <AdminEmpresaNav />
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Modifica tus datos como administrador</h4>
            <div className="form-group">
              <form
                onSubmit={this.onSubmit}
                method="POST"
                encType="multipart/form-data"
              >
                {/* <select name="UserType" className="form-control">
                  <option value="" disabled selected>
                    Tipo de usuario
                  </option>
                  <option value={this.state.UserType = "Vendedor"}>Vendedor</option>
                  <option value={this.state.UserType ="AdminEmpresa"}>Admin Empresa</option>
                </select> */}
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Vendedor o AdminEmpresa"
                  value={this.state.UserType}
                  name="UserType"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Nombre"
                  value={this.state.FirstName}
                  name="FirstName"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Apellido"
                  value={this.state.LastName}
                  name="LastName"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Id de la Empresa"
                  value={this.state.Company}
                  name="Company"
                />

                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Email"
                  value={this.state.Email}
                  name="Email"
                  type="email"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Contraseña"
                  value={this.state.Password}
                  name="Password"
                  type="password"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Id de la Comision"
                  value={this.state.ComissionScheme}
                  name="ComissionScheme"
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Telefono"
                  value={this.state.Telephone}
                  name="Telephone"
                />
                {/* <input
                  className="form-control"
                  type="file"
                  onChange={this.handleChangePhoto}
                  placeholder="Foto"
                  value={this.state.Photo}
                  name="Photo"
                /> */}

                <button class="btn waves-effect waves-light" type="submit">Guardar los cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
