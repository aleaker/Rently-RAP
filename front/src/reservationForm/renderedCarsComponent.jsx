import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function RenderedCars({ cars }) {
  console.log("CARS",cars)
  return (
    <div>
      {cars.map(car => (
        <Card>
        {console.log(car)}
          <Col md={4}>
            <img src={car.Car.Model.ImagePath} style={{ width: "100%" }} />
          </Col>
          <Col md={4}>
          <p>{car.Car.Model.Brand.Name} {car.Car.Model.Name}</p>
          </Col>
        </Card>
      ))}
    </div>
  );
}
