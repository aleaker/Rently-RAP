import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";

 function RenderedCars(props) {
  const handleClick = (e)=>{
  props.history.push("/checkout",props.car)
  }

  return (
    <div>
<<<<<<< HEAD
      {(cars||[]).map(car => (
        <Card>
        {console.log(car)}
=======
      
        
       <Card onClick={handleClick}>
          <Col md={4}>
            <img src={props.car.Car.Model.ImagePath} style={{ width: "100%" }} />
          </Col>
>>>>>>> 04a17fbb5dcc4f2d0e7b030fe3f3dad3c14b210c
          <Col md={4}>
          <p>{props.car.Car.Model.Brand.Name} {props.car.Car.Model.Name}</p>
          </Col>
<<<<<<< HEAD
          <Col md={4}>  
          <p>{car.Car.Model.Brand.Name} {car.Car.Model.Name}</p>
=======
          <Col md={4}>
          <p>{props.car.RentalData.Name} {props.car.RentalData.id}</p>
>>>>>>> 04a17fbb5dcc4f2d0e7b030fe3f3dad3c14b210c
          </Col>
        </Card> 
      
  
    </div>
  );
}

export default withRouter(RenderedCars)