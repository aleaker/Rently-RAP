import React from "react";
import RentalForm from "./RentalFormComponent";
import { connect } from "react-redux";
import { registerRental } from "../store/actions/addRental";

import EsquemaComision from '../comisiones/EsquemaComision'

class RentalFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      logo: "",
      url: "",
      usuario: "",
      password: "",
      mainContact: {
        firstName: "",
        lastName: "",
        email: ""
      },
      commissionScheme: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    registerRental(this.state);
  }

  handleChange(event) {
    console.log(this.state);
    switch (event.target.name) {
      case "NombreEmpresa":
        this.setState({ name: event.target.value });
        break;
      case "Logo":
        this.setState({ name: event.target.value });
        this.setState({ logo: event.target.value });
        break;
      case "APIurl":
        this.setState({ url: event.target.value });
        break;
      case "usuario":
        this.setState({ usuario: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;

      case "firstName":
        let firstName = event.target.value;
        this.setState(prevState => ({
          mainContact: {
            ...prevState.mainContact,
            firstName: firstName
          }
        }));
        break;
      case "lastName":
        let lastName = event.target.value;
        this.setState(prevState => ({
          mainContact: {
            ...prevState.mainContact,
            lastName: lastName
          }
        }));
        break;
      case "Email":
        let email = event.target.value;
        this.setState(prevState => ({
          mainContact: { ...prevState.mainContact, email: email }
        }));
        break;

      case "EsquemaDeComisiones":
        this.setState({ commissionScheme: event.target.value });
        break;
      default:
        console.log("aca no pasó nada");
    }
  }

  render() {
    return (
      <div>
      <RentalForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
      <EsquemaComision/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // history: state.cart.history
});

const mapDispatchToProps = dispatch => ({
  // fetchHistory: () => dispatch(fetchHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalFormContainer);
