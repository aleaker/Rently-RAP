import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";

function RenderedCars(props) {
  const handleClick = e => {
    props.history.push("/checkout", props.car);
  };

  return (
    <div>
      <Card onClick={handleClick}>
        <Col md={4}>
          <img src={props.car.Car.Model.ImagePath} style={{ width: "100%" }} />
        </Col>
        <Col md={4}>
          <p>
            {props.car.Car.Model.Brand.Name} {props.car.Car.Model.Name}
          </p>
        </Col>
        <Col md={4}>
          <p>
            {props.car.RentalData.Name} {props.car.RentalData.id}
          </p>
        </Col>
      </Card>
    </div>
  );
}

export default withRouter(RenderedCars);
