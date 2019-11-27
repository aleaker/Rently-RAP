import React from "react";
import RentalForm from "./RentalFormComponent";
import { connect } from "react-redux";
import { registerRental } from "../store/actions/addRental";
import EsquemaComisione from "../comisiones/EsquemaComision";

class RentalFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Logo: "",
      Url: "",
      User: "",
      Password: "",
      MainContact: {
        FirstName: "",
        LastName: "",
        Email: ""
      },
      CommissionScheme: {
        Company: "",
        From: "",
        To: "",
        CommissionPercentage: "",
        FromDate: "",
        ToDate: "",
        Type: ""
      }
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
        this.setState({ Name: event.target.value });
        break;
      case "Logo":
        this.setState({ Logo: event.target.value });
        break;
      case "APIurl":
        this.setState({ Url: event.target.value });
        break;
      case "usuario":
        this.setState({ User: event.target.value });
        break;
      case "password":
        this.setState({ Password: event.target.value });
        break;

      case "firstName":
        let firstName = event.target.value;
        this.setState(prevState => ({
          MainContact: {
            ...prevState.MainContact,
            FirstName: firstName
          }
        }));
        break;
      case "lastName":
        let lastName = event.target.value;
        this.setState(prevState => ({
          MainContact: {
            ...prevState.MainContact,
            LastName: lastName
          }
        }));
        break;
      case "Email":
        let email = event.target.value;
        this.setState(prevState => ({
          MainContact: { ...prevState.MainContact, Email: email }
        }));
        break;
      case "CommissionScheme":
        let CommissionScheme = event.target.value;
        this.setState(prevState => ({
          CommissionScheme: CommissionScheme
        }));
        break;
      // case "From":
      //   let from = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: { ...prevState.CommissionScheme, From: from }
      //   }));
      //   break;
      // case "To":
      //   let to = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: { ...prevState.CommissionScheme, To: to }
      //   }));
      //   break;
      // case "CommissionPercentage":
      //   let commissionpercentage = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: {
      //       ...prevState.CommissionScheme,
      //       CommissionPercentage: commissionpercentage
      //     }
      //   }));
      //   break;
      // case "FromDate":
      //   let fromdate = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: {
      //       ...prevState.CommissionScheme,
      //       FromDate: fromdate
      //     }
      //   }));
      //   break;
      // case "ToDate":
      //   let todate = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: { ...prevState.CommissionScheme, ToDate: todate }
      //   }));
      //   break;
      // case "Type":
      //   let type = event.target.value;
      //   this.setState(prevState => ({
      //     CommissionScheme: { ...prevState.CommissionScheme, Type: type }
      //   }));
      //   break;
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
        <EsquemaComisione handleSchema={this.handleChange} />
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
