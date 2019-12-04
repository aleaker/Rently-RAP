import React, { Component } from "react";
import { connect } from "react-redux";
import FormComponent from "./FormComponent";
import { addSalesperson } from "../../store/actions/addSalesperson";
import AdminEmpresaNav from "./Navigation";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Company: "",
      Email: "",
      Password: "",
      Telephone: "",
      Photo: "",
      UserType: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePhoto = this.handleChangePhoto.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  handleSubmit(event) {
    console.log("ENTRO AL HANDLESUBMIT");
    event.preventDefault();
    this.props.addSalesperson(this.state);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangePhoto(e) {
    this.setState({ Photo: e.target.value });
  }

  render() {
    const {
      FirstName,
      LastName,
      Company,
      Email,
      Password,
      Telephone,
      Photo,
      UserType,
      CommissionScheme
    } = this.state;
    return (
      <div>
        <AdminEmpresaNav />
        <FormComponent
          handleSubmit={this.handleSubmit}
          onInputChange={this.onInputChange}
          handleChangePhoto={this.handleChangePhoto}
          FirstName={FirstName}
          LastName={LastName}
          Company={Company}
          Email={Email}
          Password={Password}
          Telephone={Telephone}
          Photo={Photo}
          UserType={UserType}
          CommissionScheme={CommissionScheme}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addSalesperson: salesperson => dispatch(addSalesperson(salesperson))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
