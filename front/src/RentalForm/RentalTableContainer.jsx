import React from "react";
import { connect } from "react-redux";
import RentalTableComponent from "./RentalTableComponent";
import { fetchCarRentals, editCarRental,deleteCarRental } from "../store/actions/addRental";
import Store from "../store/index"

class RentalTable extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchCarRentals();
  }

  handleEdit(carRental){
    this.props.editCarRental(carRental);
  }

  handleDelete(carRental){
  this.props.deleteCarRental(carRental)
  .then(this.props.fetchCarRentals())
  }
  
  render() {
    return <RentalTableComponent 
    carRentals={this.props.carRentals}
    handleEdit={this.handleEdit}
    handleDelete={this.handleDelete} />;
  }
}

const mapStateToProps = state => ({
  carRentals: state.carRental
  }
);

const mapDispatchToProps = dispatch => ({
   fetchCarRentals: () => dispatch(fetchCarRentals()),
   editCarRental: (carRental) => dispatch(editCarRental(carRental)),
   deleteCarRental: (carRental) => dispatch(deleteCarRental(carRental)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalTable);
