import React from "react";
import RentalForm from "./RentalFormComponent";
import { connect } from "react-redux";
import { registerRental } from "../store/actions/addRental";
import FormEsquema from "../comisiones/FormEsquema";
import EsquemaComisiones from "../comisiones/EsquemaComision";

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
      showForm: [],
      schemaName: "",
      schemaFrom: "",
      schemaTo: ""

      //
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommissionSchema = this.handleCommissionSchema.bind(this);
    this.addNewForm = this.addNewForm.bind(this);
    this.handleSchema = this.handleSchema.bind(this);

    this.handleSchemaData = this.handleSchemaData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMainContact = this.handleMainContact.bind(this);
  }

  handleMainContact(obj) {
    let BankAccountInfoCopy = this.state.MainContact;
    BankAccountInfoCopy[Object.keys(obj)[0]] = Object.values(obj)[0];
    this.setState({ MainContact: BankAccountInfoCopy }, () =>
      console.log(this.state)
    );
  }

  handleSchemaData(obj) {
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

  handleCommissionSchema(obj, order) {
    let copySchema = this.state.CommissionScheme;
    copySchema[order] = obj;
    this.setState({ CommissionScheme: copySchema }, () => {
      console.log(this.state);
    });
  }

  addNewForm() {
    let datosEsquema = {
      Name: this.state.schemaName,
      From: this.state.schemaFrom,
      To: this.state.schemaTo
    };
    let minValue =
      this.state.CommissionScheme[this.state.CommissionScheme.length - 1][
        "To"
      ] + 1;
    this.setState({
      showForm: [
        ...this.state.showForm,
        <FormEsquema
          //Se le pasa el esquema de comision, el largo del array del esquema (permite modificar uno en particular)
          // y le da su key. La propiedad handleCommission Schema cambia
          commission={this.state.CommissionScheme}
          order={this.state.showForm.length}
          key={this.state.showForm.length}
          handleCommissionSchema={this.handleCommissionSchema}
          datosEsquema={datosEsquema}
          addOne={this.addNewForm}
          minValue={minValue}
        />
      ]
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("creando");
    registerRental(this.state);
  }
  handleSchema(obj) {
    this.setState({ CommissionScheme: obj }, () => {
      console.log(this.state);
    });
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

  // handleChange(event) {
  //   console.log(this.state);
  //   switch (event.target.name) {
  //     case "NombreEmpresa":
  //       this.setState({ Name: event.target.value });
  //       break;
  //     case "Logo":
  //       this.setState({ Logo: event.target.value });
  //       break;
  //     case "APIurl":
  //       this.setState({ Url: event.target.value });
  //       break;
  //     case "usuario":
  //       this.setState({ User: event.target.value });
  //       break;
  //     case "password":
  //       this.setState({ Password: event.target.value });
  //       break;

  //     case "firstName":
  //       let firstName = event.target.value;
  //       this.setState(prevState => ({
  //         MainContact: {
  //           ...prevState.MainContact,
  //           FirstName: firstName
  //         }
  //       }));
  //       break;
  //     case "lastName":
  //       let lastName = event.target.value;
  //       this.setState(prevState => ({
  //         MainContact: {
  //           ...prevState.MainContact,
  //           LastName: lastName
  //         }
  //       }));
  //       break;
  //     case "Email":
  //       let email = event.target.value;
  //       this.setState(prevState => ({
  //         MainContact: { ...prevState.MainContact, Email: email }
  //       }));
  //       break;
  //     case "CommissionScheme":
  //       break;
  //     default:
  //       console.log("aca no pasó nada");
  //   }
  // }

  render() {
    console.log(this.state);
    return (
      <div>
        <RentalForm
          handleSchema={this.handleSchema}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          schemaName={this.state.schemaName}
          schemaFrom={this.state.schemaFrom}
          schemaTo={this.state.schemaTo}
          handleSchemaData={this.handleSchemaData}
          handleCommissionSchema={this.handleCommissionSchema}
          forms={this.state.showForm}
          addNewForm={this.addNewForm}
          commission={this.state.CommissionScheme}
          handleMainContact={this.handleMainContact}
        />
        />
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
