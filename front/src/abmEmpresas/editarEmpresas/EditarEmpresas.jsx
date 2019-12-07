import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
class EditarEmpresas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CommissionScheme: [
        {
          Name: "",
          FromDate: "",
          ToDate: "",
          From: "",
          To: "",
          CommissionPercentage: "",
          Type: "Company"
        }
      ],
      CompanyName: "",
      Description: "",
      Address: "",
      Country: "",
      Telephone: "",
      MainContact: {
        FirstName: "",
        LastName: "",
        IdType: "",
        IdNum: "",
        Email: ""
      },
      BankAccountInfo: {
        Bank: "",
        AccountType: "",
        AccountNumber: "",
        Currency: "",
        Country: "",
        SwiftCode: ""
      },
      UsersSchema: [],
      //Estados Auxiliares
      internationalCountryCode: "",
      localCountryCode: "",
      phoneNumber: "",
      showForm: [],
      schemaName: "",
      schemaFrom: "",
      schemaTo: "",
      city: "",
      state: "",
      street: "",
      number: "",
      clicked: false,
      disable: false,
      enteredCom: false,
      disableEmpresa: true,
      disableUbicacion: true,
      disableContacto: true,
      disableDatosBancarios: true,
      disableUsuarioPrincipal: true,
      userId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBankDetails = this.handleBankDetails.bind(this);
  }
  componentDidMount() {
    let company;

    let array = this.props.location.pathname.split("/");
    let enterprise = array[array.length - 1];
    axios
      .post("/api/createCompany/get/", { id: enterprise })
      .then(e => {
        console.log(e.data);
        company = e.data;
        return company;
      })
      .then(e => {
        Object.entries(e.Company).map(obj => {
          let objKey = obj[0];
          let objValue = obj[1];
          let newObj = {};
          newObj[objKey] = objValue;
          if (Object.keys(newObj)[0] == "Telephone") {
            let telephone = newObj["Telephone"].split(" ");
            this.setState({ internationalCountryCode: telephone[0] });
            this.setState({ localCountryCode: telephone[1] });
            this.setState({ phoneNumber: telephone[2] });
          } else if (Object.keys(newObj)[0] == "Address") {
            let address = newObj["Address"].split(",");
            let number = address[0].split(" ");
            this.setState({ number: number[0] });
            this.setState({ street: number[1] });
            this.setState({ city: address[1] });
            this.setState({ state: address[2] });
          }
          this.setState({ userId: company.User[0]._id });
          this.setState(newObj);
        });
        return null;
      })
      .then(() => console.log(this.state));
  }
  updateBusiness() {
    let array = this.props.props.location.pathname.split("/");
    let enterprise = array[array.length - 1];

    const UsersSchema = this.state.MainContact;
    const notAllowed = [
      "disableUsuarioPrincipal",
      "disableDatosBancarios",
      "disableContacto",
      "disableUbicacion",
      "disableEmpresa",
      "enteredCom",
      "number",
      "street",
      "state",
      "city",
      "schemaTo",
      "schemaFrom",
      "schemaName",
      "showForm",
      "internationalCountryCode",
      "localCountryCode",
      "phoneNumber",
      "clicked",
      "disable",
      "UsersSchema",
      "CommissionScheme"
    ];
    const CommissionSchema = this.state.CommissionScheme;
    let Company = this.state;
    Object.keys(Company)
      .filter(key => notAllowed.includes(key))
      .forEach(key => delete Company[key]);
    console.log("", { users: UsersSchema, Company });
    axios.post("/api/createCompany/update", {
      userId: this.state.userId,
      id: enterprise,
      users: UsersSchema,
      Company,
      Commission: CommissionSchema
    });
  }

  handleBankDetails(obj) {
    let BankAccountInfoCopy = this.state.BankAccountInfo;
    BankAccountInfoCopy[Object.keys(obj)[0]] = Object.values(obj)[0];
    this.setState({ BankAccountInfo: BankAccountInfoCopy }, () =>
      console.log(this.state)
    );
  }

  handleDisable(obj) {
    this.setState(obj);
  }
  handleChange(obj) {
    this.setState(obj, () => {
      if (obj.state || obj.street || obj.number || obj.city) {
        this.setState({
          Address: `${this.state.number} ${this.state.street}, ${this.state.city}, ${this.state.state}`
        });
      } else if (
        obj.internationalCountryCode ||
        obj.localCountryCode ||
        obj.phoneNumber
      ) {
        this.setState({
          Telephone: `+${this.state.internationalCountryCode} ${this.state.localCountryCode} ${this.state.phoneNumber}`
        });
      }
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card card-body">
          <Col xs={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "flex-end"
              }}
            >
              <h5>Datos Empresa</h5>
              <Button
                onClick={() =>
                  this.handleDisable({
                    disableEmpresa: !this.state.disableEmpresa
                  })
                }
              >
                {this.state.disableEmpresa ? "Editar" : "Guardar"}
              </Button>
            </div>
            <label>Nombre o Razon Social</label>
            <input
              type="text"
              placeholder="Nombre o Razon Social"
              id="business_Name"
              onChange={evt =>
                this.handleChange({ CompanyName: evt.target.value })
              }
              value={this.state.CompanyName}
              disabled={this.state.disableEmpresa}
            />
            <label>Descripcion</label>
            <textarea
              id="textarea1"
              className="materialize-textarea"
              placeholder="Descripcion"
              id="business_Description"
              onChange={evt =>
                this.handleChange({ Description: evt.target.value })
              }
              disabled={this.state.disableEmpresa}
              value={this.state.Description}
            />
          </Col>
          <Col xs={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "flex-end"
              }}
            >
              <h5>Ubicacion</h5>
              <Button
                onClick={() =>
                  this.handleDisable({
                    disableUbicacion: !this.state.disableUbicacion
                  })
                }
              >
                {this.state.disableUbicacion ? "Editar" : "Guardar"}
              </Button>
            </div>
            <Row>
              <Col xs={12} md={4}>
                <label>Pais</label>
                <input
                  type="text"
                  placeholder="Pais"
                  id="business_Country"
                  onChange={evt =>
                    this.handleChange({ Country: evt.target.value })
                  }
                  disabled={this.state.disableUbicacion}
                  value={this.state.Country}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Provincia/Estado</label>
                <input
                  type="text"
                  placeholder="Estado"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ state: evt.target.value })
                  }
                  disabled={this.state.disableUbicacion}
                  value={this.state.state}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Ciudad</label>
                <input
                  type="text"
                  placeholder="Ciudad"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ city: evt.target.value })
                  }
                  disabled={this.state.disableUbicacion}
                  value={this.state.city}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <label>Calle</label>
                <input
                  type="text"
                  placeholder="Calle"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ street: evt.target.value })
                  }
                  disabled={this.state.disableUbicacion}
                  value={this.state.street}
                />
              </Col>
              <Col xs={12} md={4}>
                <label>Numero</label>
                <input
                  type="number"
                  placeholder="Numero"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ number: evt.target.value })
                  }
                  disabled={this.state.disableUbicacion}
                  value={this.state.number}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "flex-end"
              }}
            >
              <h5>Contacto</h5>
              <Button
                onClick={() =>
                  this.handleDisable({
                    disableContacto: !this.state.disableContacto
                  })
                }
              >
                {this.state.disableContacto ? "Editar" : "Guardar"}
              </Button>
            </div>
            <Row>
              <Col xs={6} md={3}>
                <label>Codigo Pais</label>
                <input
                  type="text"
                  placeholder="Codigo Pais"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({
                      internationalCountryCode: evt.target.value
                    })
                  }
                  disabled={this.state.disableContacto}
                  value={this.state.internationalCountryCode}
                />
              </Col>
              <Col xs={6} md={4}>
                <label>Codigo de Area</label>
                <input
                  type="text"
                  placeholder="Codigo de Area"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ localCountryCode: evt.target.value })
                  }
                  disabled={this.state.disableContacto}
                  value={this.state.localCountryCode}
                />
              </Col>
              <Col xs={12} md={5}>
                <label>Numero de Telefono</label>
                <input
                  type="text"
                  placeholder="Telefono"
                  id="business_Description"
                  onChange={evt =>
                    this.handleChange({ phoneNumber: evt.target.value })
                  }
                  disabled={this.state.disableContacto}
                  value={this.state.phoneNumber}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "flex-end"
              }}
            >
              <h5>Datos Bancarios</h5>
              <Button
                onClick={() =>
                  this.handleDisable({
                    disableDatosBancarios: !this.state.disableDatosBancarios
                  })
                }
              >
                {this.state.disableDatosBancarios ? "Editar" : "Guardar"}
              </Button>
            </div>
            <Row>
              <Col xs={6}>
                <label>Banco</label>
                <input
                  type="text"
                  placeholder="Banco"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ Bank: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.Bank}
                />
              </Col>
              <Col xs={6}>
                <label>Tipo de Cuenta</label>
                <input
                  type="text"
                  placeholder="Tipo de Cuenta"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ AccountType: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.AccountType}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <label>Numero de Cuenta</label>
                <input
                  type="text"
                  placeholder="Numero de Cuenta"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ AccountNumber: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.AccountNumber}
                />
              </Col>
              <Col xs={2}>
                <label>Moneda</label>
                <input
                  type="text"
                  placeholder="Moneda"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ Currency: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.Currency}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <label>Codigo Swift</label>
                <input
                  type="text"
                  placeholder="Codigo Swift"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ SwiftCode: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.SwiftCode}
                />
              </Col>
              <Col xs={6}>
                <label>Pais</label>
                <input
                  type="text"
                  placeholder="Pais"
                  id="business_Description"
                  onChange={evt =>
                    this.handleBankDetails({ Country: evt.target.value })
                  }
                  disabled={this.state.disableDatosBancarios}
                  value={this.state.BankAccountInfo.Country}
                />
              </Col>
            </Row>
          </Col>
          {/* <Col xs={12}>
        <div style={{display: 'inline-flex', justifyContent: 'space-between', width: '100%', alignItems:'flex-end'}}> 
        <h5 >Usuario Principal</h5>
        <Button onClick={()=> this.handleDisable({disableUsuarioPrincipal:!this.state.disableUsuarioPrincipal})}>
          
        {this.state.disableUsuarioPrincipal?'Editar':'Guardar'}</Button>
        </div>
        <div>
          <Row>
          <Col md={6}>
        <label>Nombre</label>
        <input type="text" value={this.state.MainContact.FirstName}
        disabled={this.state.disableUsuarioPrincipal}/>
        </Col><Col md={6}>
        <label>Apellido</label>
        <input type="text" value={this.state.MainContact.LastName}
        disabled={this.state.disableUsuarioPrincipal}/>
        </Col>
        </Row>
        <Row><Col md={6}>
        <label>Email</label>
        <input type="text" value={this.state.MainContact.Email}
        disabled={this.state.disableUsuarioPrincipal}/>
        </Col><Col md={6}>
        <label>Contrasena</label>
        <input type="text"
        disabled={this.state.disableUsuarioPrincipal}/>
        </Col></Row>
        </div>
      </Col> */}
          <Button onClick={() => this.updateBusiness()}>Actualizar</Button>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(EditarEmpresas);
