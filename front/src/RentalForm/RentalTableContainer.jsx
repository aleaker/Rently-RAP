import React from "react";
import { connect } from "react-redux";
import RentalTableComponent from "./RentalTableComponent";
import { fetchCarRentals,deleteCarRental,editCarRental,saveCarRentalHistory } from "../store/actions/rentalActions";
import Store from "../store/index"
import RentalFormComponent from "./RentalFormComponent";
import EditRentalForm from "./editRentalForm"

class RentalTable extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       showForm: false,
       selectedRental:{},
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
      CommissionScheme:""
     }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.showEditRentalForm = this.showEditRentalForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    this.props.fetchCarRentals();
  }

  showEditRentalForm(carRental){
    console.log("ACAAA",carRental)
    this.props.saveCarRentalHistory(carRental)
    this.setState(()=>{
      return {showForm: true,
      selectedRental:carRental}
    },
    )
  }

  handleEdit(carRental){
    console.log("ete",carRental)
    this.props.editCarRental(carRental);
  }

  handleDelete(carRental){
  this.props.deleteCarRental(carRental);
  }

  handleSubmit(event){
    event.preventDefault();
//disparar accion de update
console.log("handlesubmittt")
    this.setState((carRental)=>{
      return {showForm: false,
      selectedRental:{}}})
    
      
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
        break;
      default:
        console.log("aca no pasó nada");
    }
  }

  
  render() {
    return (
    this.state.showForm ? 
    
    <EditRentalForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    :
    <RentalTableComponent 
    showEditRentalForm={this.showEditRentalForm}
    carRentals={this.props.carRentals}
    handleEdit={this.handleEdit}
    handleDelete={this.handleDelete} /> 
    );
  }
}

const mapStateToProps = state => ({
  carRentals: state.carRental
  }
);

const mapDispatchToProps = dispatch => ({
  saveCarRentalHistory: (carRental)=> dispatch(saveCarRentalHistory(carRental)),
   fetchCarRentals: () => dispatch(fetchCarRentals()),
   editCarRental: (carRental) => dispatch(editCarRental(carRental)),
   deleteCarRental: (carRental) => dispatch(deleteCarRental(carRental)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalTable);
