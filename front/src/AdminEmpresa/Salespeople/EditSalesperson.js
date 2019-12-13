import React, { Component } from "react";
import axios from "axios";
import AdminEmpresaNav from "./Navigation";

export default class EditSalesperson extends Component {
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
    this.getSalesperson(this.props.match.params.id);
  }

  getSalesperson(id) {
    console.log(this.props.match.path.split('/')[2])
    const route = this.props.match.path.split('/')[2]
    
    axios.get("http://localhost:3000/api/salesperson/" + id).then(res => {
      this.setState({
        FirstName: res.data.FirstName,
        LastName: res.data.LastName,
        Company: res.data.Company,
        Email: res.data.Email,
        Password: res.data.Password,
        Telephone: res.data.Telephone,
        UserType: res.data.Usertype
      });
      console.log(
        "SALGO DE A getSalesperson y esto es salespeople",
        this.state.salesperson
      );
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
      "http://localhost:3000/api/salesperson/edit/" +
        this.props.match.params.id,
      edit
    );
    this.getSalesperson(this.state._id);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Modificar usuario</h4>
            <div className="form-group">
              <form
                onSubmit={this.onSubmit}
                method="POST"
                encType="multipart/form-data"
                autoComplete={'off'}
              >
                {/* <select name="UserType" className="form-control">
                  <option value="" disabled selected>
                    Tipo de usuario
                  </option>
                  <option value={this.state.UserType = "Vendedor"}>Vendedor</option>
                  <option value={this.state.UserType ="AdminEmpresa"}>Admin Empresa</option>
                </select> */}
                {/* <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Vendedor o AdminEmpresa"
                  value={this.state.UserType}
                  name="UserType"/> */}
                
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
                  placeholder="Email"
                  value={this.state.Email}
                  name="Email"
                  type="email"
                  autoComplete='off'
                />
                <input
                  className="form-control"
                  onChange={this.onInputChange}
                  placeholder="Nueva Contraseña"
                  // value={this.state.Password}
                  name="Password"
                  type="password"
                  autoComplete='off'
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

                <button class="btn waves-effect waves-light" type="submit">
                  Guardar los cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
