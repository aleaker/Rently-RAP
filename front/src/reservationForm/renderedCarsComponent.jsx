import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroup";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import {
  FaCarAlt,
  FaSuitcase,
  FaCaretRight,
  FaRegSnowflake
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { withRouter } from "react-router-dom";

function RenderedCars(props) {
  const handleClick = e => {
    console.log(props.car, "ACAAAAA PAPI");
    props.history.push("/checkout", props.car);
  };
  //#3f51b5
  return (
    <Card>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          {" "}
          <Card.Title>
            {" "}
            {props.car.Car.Model.Brand.Name} {props.car.Car.Model.Name} o
            similar.
          </Card.Title>
        </ListGroupItem>
        <ListGroupItem>
          <h6>Lugar de recogida:</h6> {props.car.DeliveryPlace.Address}
        </ListGroupItem>
        <ListGroupItem>
          {" "}
          <Row>
            <Col>
              <Card.Img
                style={({ width: "30rem" }, { padding: "5px" })}
                variant="bottom"
                src={props.car.Car.Model.ImagePath}
              />
            </Col>
            <Col>
              <Row>
                <Col>
                  <Row style={{ marginBottom: "0px" }}>
                    {" "}
                    <MdAirlineSeatReclineExtra size={28} />
                  </Row>
                  <Row>{props.car.Car.Model.Passengers} pasajeros</Row>
                </Col>
                <Col>
                  <Row style={{ marginBottom: "0px" }}>
                    {" "}
                    <FaRegSnowflake size={28} />
                  </Row>{" "}
                  <Row style={{ marginBottom: "0px" }}>
                    Aire acondicionado:{" "}
                  </Row>
                  <Row>{props.car.Car.Model.AirConditioner}</Row>
                </Col>
                <Col>
                  <Row style={{ marginBottom: "0px" }}>
                    {" "}
                    <GiGears size={28} />
                  </Row>{" "}
                  <Row>Cambio de marchas: {props.car.Car.Model.Gearbox}</Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row style={{ marginBottom: "0px" }}>
                    <FaCarAlt size={28} />
                  </Row>{" "}
                  <Row>{props.car.Car.Model.Doors} puertas</Row>
                </Col>
                <Col>
                  <Row style={{ marginBottom: "0px" }}>
                    <FaSuitcase size={28} />
                  </Row>
                  <Row>{props.car.Car.Model.SmallLuggage} maletas</Row>
                </Col>
                <Col></Col>
              </Row>
            </Col>{" "}
            <Card style={({ padding: "20px" }, { marginRight: "18px" })}>
              <Col md="auto">
                {" "}
                <Row style={({ marginBottom: "0px" }, { textAlign: "center" })}>
                  Precio por {props.car.PriceItems[0].Quantity} días
                </Row>
                <Row style={{ marginBottom: "0px" }}>
                  <h4>${props.car.PriceItems[0].Price}</h4>
                </Row>
                <Row>${props.car.PriceItems[0].UnitPrice}/día</Row>
                <Row>
                  <Button variant="primary" onClick={e => handleClick(e)}>
                    Continuar <FaCaretRight />
                  </Button>
                </Row>
              </Col>
            </Card>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default withRouter(RenderedCars);
