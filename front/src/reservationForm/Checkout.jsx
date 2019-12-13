import React from "react";
import "date-fns";
import Error from '../messages/error'
import Success from '../messages/success'
import Loading from '../messages/loading'
import MenuItem from "@material-ui/core/MenuItem";
import axios from 'axios';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import * as actions from "../store/actions/bookingActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "colunm"
    }
  },
  items: {
    margin: "2%"
  },
  card: {
    maxWidth: 345
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
}));

function Checkout(props) {
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [reservation, setReservation] = useState(props.location.state);
  const [state, setState] = useState({
    DocumentType: "",
    DocumentId: "",
    FirstName: "",
    LastName: "",
    Telephone: "",
    Email: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const handleChange = e => {
    e.persist();
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = 'waiting'
    setLoading(true);
    axios
      .post("api/booking", {
        customer: state,
        reservation: reservation,
        user: props.user
      })
      .then(msg => {
        console.log(msg)
        setLoading(false);
        data = 'done'
    return msg.data})
   .then(data => (data.errmsg || data.errors)? setResult([<Error error={data.errmsg} error2={data.errors} handleResult={handleResult}/>]): setResult([<Success/>]))
  };
  // this.setState({loading: true})

  // .then(msg=>{
  //   this.setState({loading: false})
  //   data = 'done'
  //   return msg.data})
  // .then(data => (data.errmsg || data.errors)? this.setState({result: [<Error error={data.errmsg} error2={data.errors} handleResult={this.handleResult}/>]}): this.setState({result: [<Success/>]}))

  return (
    <Box>
     {loading? <div style={{display: 'flex', justifyContent: 'center'}}><Loading/></div>:<div>
      <Typography
        style={{ padding: "1%" }}
        variant="h4"
        component="h2"
        align="left"
      >
        Reserva
      </Typography>

      <div className={classes.container}>
        <Card>
          <Typography
            style={{ padding: "1%" }}
            variant="h6"
            component="h6"
            align="center"
          >
            Datos del Conductor
          </Typography>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <TextField
                className={classes.items}
                name="DocumentType"
                id="outlined-select-currency"
                select
                label="Tipo"
                value={state.DocumentType}
                onChange={handleChange}
                variant="outlined"
                size="medium"
              >
                {["DNI", "Pasaporte", "Cedula"].map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className={classes.items}
                required //   RentalData: {id: "5dee898d0139d61193143c77", Name: "rentadora lolo"}
                name="DocumentId"
                label="Numero de Documento"
                variant="outlined"
                onChange={handleChange}
                checkout
                value={state.DocumentId}
              />
            </div>
            <div>
              <TextField
                className={classes.items}
                required
                name="FirstName"
                label="Nombre"
                variant="outlined"
                onChange={handleChange}
                value={state.FirstName}
              />
              <TextField
                required
                className={classes.items}
                name="LastName"
                label="Apellido"
                variant="outlined"
                onChange={handleChange}
                value={state.LastName}
              />
            </div>
            <div>
              <TextField
                required
                className={classes.items}
                name="Telephone"
                label="Telefono"
                variant="outlined"
                onChange={handleChange}
                value={state.Telephone}
              />
              <TextField
                required
                className={classes.items}
                name="Email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                value={state.Email}
                type="email"
              />
            </div>
          </form>

          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleSubmit}
            >
              Reservar
            </Button>
          </CardActions>
        </Card>
        <div>
          <Card className={classes.card}>
            <CardHeader
              title="Detalle de la Reserva"
              subheader={`Categoria: 
        ${reservation.Category.Name}`}
            />

            <CardMedia
              component="img"
              alt="Car model"
              height="210"
              image={reservation.Car.Model.ImagePath}
              title="Car Model"
            />
            <CardContent>
              <div
                style={{
                  backgroundColor: "#e6e6e6",
                  margin: "1%",
                  padding: "1%",
                  color: "#808080"
                }}
              >
                <Typography variant="p" component="p">
                  {`Marca:  ${reservation.Car.Model.Brand.Name}`}
                </Typography>
                <Typography variant="p" component="p">
                  {`Nombre: ${reservation.Car.Model.Name}`}
                </Typography>
                <Typography variant="p" component="p">
                  {`Lugar de entrega:  ${reservation.DeliveryPlace.Address}`}
                </Typography>
                <Typography variant="p" component="p">
                  {`Lugar de devolucion: ${reservation.ReturnPlace.Address}`}
                </Typography>
              </div>

              <Typography variant="h5" component="p">
                {`Precio Total:  $ ${reservation.Price}`}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>}
      {result.map(e=> e)})
    </Box>
  );
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

// {customer: {DocumentId: ""
// DocumentType: ""
// Email: ""Additionals
// FirstName: ""
// LastName: ""
// Telephone: ""}
// reservation: {
// Additionals: []
//   AvailablePromotions: (3) [{…}, {…}, {…}]
//   AverageDayPrice: 830http://localhost:3000/checkout
//   Car: {
// Id: "123",
//  Model: {AirConditioner: "Si"
//   BigLuggage: 2
//   Brand: {Name: "Ford"}
//   Category: {Id: 25, Name: "Chicos"}
//   DailyPrice: 0
//   Description: "sdpufh asidfpasfs fusp fiusf sjknf saiuhfp sufñsadn fpisud pfiusdf"
//   Doors: 5
//   Franchise: 20000
//   Gearbox: "Manual"
//   Id: 29
//   ImagePath: "https://rently.blob.core.windows.net/demo/CarModel/76d79b6f-643c-42ed-bfed-c3c268a0d4b6.jpg"
//   Multimedia: "MP3"
//   Name: "Fiesta"
//   Passengers: 4
//   SIPP: null
//   SmallLuggage: 2
//   Steering: "Hidraulica"}
//}
//   Category: {Id: 25, Name: "Chicos"}
//   Currency: null
//   DeliveryPlace: {
// Address: "Aeropuerto Internacional Ezeiza, Buenos Aires"
//   Category: "Terminales"
//   City: "Buenos Aires"
//   Country: null
//   Id: 2
//   Name: "Aeropuerto de Ezeiza"
//   Price: 400}
//   Franchise: 20000
//   FromDate: "2020-03-01T13:00:00Z"
//   HasFranchiseModifiers: false
//   IlimitedKm: false
//   Price: 27775
//   PriceItems: (3) [{…}, {…}, {…}]
//   RentalData: {id: "5dee898d0139d61193143c77", Name: "rentadora lolo"}
//   ReturnPlace: {Address: "Aeropuerto Internacional Ezeiza, Buenos Aires"
//   Category: "Terminales"
//   City: "Buenos Aires"
//   Country: null
//   Id: 2
//   Name: "Aeropuerto de Ezeiza"
//   Price: 400}
//   ToDate: "2020-04-02T14:01:00Z"
//   TotalDays: 32.5
//   TotalDaysString: "32 1/2"
//   WillLeaveCountry: null}
// user: {Active: true
//   CommissionScheme: []
//   Email: "adminis@rently.com"
//   FirstName: "rently"
//   LastName: "admin"
//   Password: "$2a$10$PXNzTznLd8XBwinCXUg8dO3mJeWTfC5zGQPmTpidVPyFc2zGjfZ5q"
//   Photo: "https://www.netclipart.com/pp/m/232-2329525_person-svg-shadow-default-profile-picture-png.png"
//   Telephone: "1136363636"
//   UserType: "rentlyadmin"
//   __v: 0
//   _id: "5de6ae9be07a5c70caf563ba"}}
