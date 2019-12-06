import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function RenderedCars({ cars }) {
  return (
    <div>
      {cars.map(car => (
        <Card>
          <Col md={4}>
            <img src={car.Car.Model.ImagePath} style={{ width: "100%" }} />
          </Col>
        </Card>
      ))}
    </div>
  );
}
