import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import NewUser from "./NewUser";
import Card from "@material-ui/core/Card";
//   FirstName: { type: String, required: true },
//   LastName: { type: String },
//   IdType: { type: String, required: true },
//   IdNum: { type: String, required: true },
//   Email: {}

export default class AltaUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      IdType: "",
      IdNum: "",
      Email: "",
      otherContacts: [],
      showForm: []
    };
    this.addOne = this.addOne.bind(this);
    this.newUser = this.newUser.bind(this);
  }
  addOne() {
    this.setState({ showForm: [...this.state.showForm, this.newUser()] });
    this.props.handleClose();
  }

  newUser() {
    this.props.mainUser();
    return (
      <Card style={{ marginBottom: "2%", padding: "2%" }}>
        <NewUser addOne={this.addOne} />
      </Card>
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="card card-body">
          <hr></hr>
          <h4>Datos Contacto Principal</h4>
          <Row>
            <Col xs={12} md={5}>
              <input
                type="text"
                placeholder="Nombre"
                value={this.props.contact.FirstName}
                onChange={evt =>
                  this.props.handleMainContact({ FirstName: evt.target.value })
                }
              />
            </Col>
            <Col xs={12} md={5}>
              <input
                type="text"
                placeholder="Apellido"
                value={this.props.contact.LastName}
                onChange={evt =>
                  this.props.handleMainContact({ LastName: evt.target.value })
                }
              />
            </Col>
            <Col xs={2} md={3}>
              <input
                type="text"
                placeholder="Tipo de Documento"
                value={this.props.contact.IdType}
                onChange={evt =>
                  this.props.handleMainContact({ IdType: evt.target.value })
                }
              />
            </Col>
            <Col xs={10} md={6}>
              <input
                type="text"
                placeholder="Numero de Documento"
                value={this.props.contact.IdNum}
                onChange={evt =>
                  this.props.handleMainContact({ IdNum: evt.target.value })
                }
              />
            </Col>
            <Col xs={12} md={6}>
              <input
                type="text"
                placeholder="Email"
                value={this.props.contact.Email}
                onChange={evt =>
                  this.props.handleMainContact({ Email: evt.target.value })
                }
              />
            </Col>
            <Button onClick={this.addOne}>Add</Button>
          </Row>
          {/* {this.state.showForm.map(el=> el)} */}
        </div>
      </div>
    );
  }
}
