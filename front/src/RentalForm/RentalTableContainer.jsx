import React from "react";
import { connect } from "react-redux";
import RentalTableComponent from "./RentalTableComponent";
import {
  fetchCarRentals,
  deleteCarRental,
  editCarRental,
  saveCarRentalHistory,
} from "../store/actions/rentalActions";
import Store from "../store/index";
import RentalFormComponent from "./RentalFormComponent";
import EditRentalForm from "./editRentalForm";


class RentalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      selectedRental: {},
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
      CommissionScheme: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.showEditRentalForm = this.showEditRentalForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCarRentals();
  }

  showEditRentalForm(carRental) {
    this.props.saveCarRentalHistory(carRental);
    this.setState(() => {
      return { showForm: true, selectedRental: carRental };
    });
  }



  handleDelete(carRental) {
    this.props.deleteCarRental(carRental);
  }

  handleSubmit(event) {
    event.preventDefault();
    //disparar accion de updateeeeeeeeeeeeeeeeeeee
    console.log("handlesubmittt", this.state.selectedRental);
    this.props.editCarRental(this.state.selectedRental);
    this.setState(carRental => {
      return { showForm: false, selectedRental: {} };
    });
  }

  handleChange(event) {
    console.log(this.state.selectedRental);
    switch (event.target.name) {
      case "NombreEmpresa":
        let name = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            Name: name
          }
        }));
        break;
      case "Logo":
        let logo = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            Logo: logo
          }
        }));
        break;
      case "APIurl":
        let url = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            Url: url
          }
        }));
        break;
      case "usuario":
        let user = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            User: user
          }
        }));
        break;
      case "password":
        let password = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            Password: password
          }
        }));
        break;

      case "firstName":
        let firstName = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            MainContact: {
              ...prevState.selectedRental.MainContact,
              FirstName: firstName
            }
          }
        }));
        break;
      case "lastName":
        let lastName = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            MainContact: {
              ...prevState.selectedRental.MainContact,
              LastName: lastName
            }
          }
        }));
        break;
      case "Email":
        let email = event.target.value;
        this.setState(prevState => ({
          selectedRental: {
            ...prevState.selectedRental,
            MainContact: {
              ...prevState.selectedRental.MainContact,
              Email: email
            }
          }
        }));
        break;
      case "CommissionScheme":
        break;
      default:
        console.log("aca no pasó nada");
    }
  }

  render() {
    return this.state.showForm ? (
      <EditRentalForm
        selectedRental={this.state.selectedRental}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    ) : (
      <RentalTableComponent
        showEditRentalForm={this.showEditRentalForm}
        carRentals={this.props.carRentals}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = state => ({
  carRentals: state.carRental
});

const mapDispatchToProps = dispatch => ({
  editCarRental: carRental => dispatch(editCarRental(carRental)),
  saveCarRentalHistory: carRental => dispatch(saveCarRentalHistory(carRental)),
  fetchCarRentals: () => dispatch(fetchCarRentals()),
  editCarRental: carRental => dispatch(editCarRental(carRental)),
  deleteCarRental: carRental => dispatch(deleteCarRental(carRental))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalTable);
