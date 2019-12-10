import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import DriverForm from "./DriverForm";
// import PaymentForm from './PaymentForm';
// import Review from './Review';


export default function Checkout() {


  return (
    <Box>
      <Typography component="h1" variant="h4" align="center">
        Reserva
      </Typography>
      <form
        noValidate
        autoComplete="off"
      >
        <DriverForm />
      </form>
      <Button
        variant="contained"
        color="primary"
      >
        Reservar
      </Button>
    </Box>
  );
}
