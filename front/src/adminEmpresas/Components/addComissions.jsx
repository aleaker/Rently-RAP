import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export default function({ user, addComission }) {
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());
  const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());
  const [error, setError] = React.useState({
    Name: false,
    From: false,
    To: false,
    CommissionPercentage: false
  });
  const [state, setState] = React.useState({
    Name: "",
    From: 0,
    To: 0,
    CommissionPercentage: 0,
    FromDate: "",
    ToDate: ""
    // Company: user._id
  });

  useEffect(() => {
    console.log(state);
  }, []);
  const handleChange = e => {
    e.persist();
    if (e.target.value) {
      setError(error => ({
        ...error,
        [e.target.id]: false
      }));
      setState(state => ({
        ...state,
        [e.target.id]: e.target.value
      }));
    } else {
      setError(error => ({
        ...error,
        [e.target.id]: true
      }));
    }
  };
  const handleDateChangeFrom = date => {
    console.log(date);
    setSelectedDateFrom(date);
    let dateFromString = date.toISOString().slice(0, 10);
    setState(state => ({
      ...state,
      FromDate: dateFromString
    }));
  };
  const handleDateChangeTo = date => {
    setSelectedDateTo(date);
    let dateToString = date.toISOString().slice(0, 10);
    setState(state => ({
      ...state,
      ToDate: dateToString
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(state);

    return axios
      .post(`/api/adminEmpresas/add/comissions`, state)
      .then(() => alert("Se ha creado tu esquema de comisiones"));
  };

  return (
    <div className="container">
      <div className="card card-body">
        <form onSubmit={handleSubmit}>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Agregar Comision
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="Name"
                  name="Nombre Esquema"
                  label="Nombre Esquema"
                  fullWidth
                  type="text"
                  onChange={handleChange}
                  required
                  error={error.Name}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="From"
                  name="Desde"
                  label="Desde"
                  placeholder="$"
                  onChange={handleChange}
                  fullWidth
                  error={error.From}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="To"
                  name="Hasta"
                  label="Hasta"
                  placeholder="$"
                  onChange={handleChange}
                  error={error.To}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="CommissionPercentage"
                  name="% Comision"
                  label="% Comision"
                  onChange={handleChange}
                  error={error.CommissionPercentage}
                  fullWidth
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="FromDate"
                    label="Fecha validez desde"
                    value={selectedDateFrom}
                    fullWidth
                    onChange={handleDateChangeFrom}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="ToDate"
                    fullWidth
                    label="Fecha validez hasta"
                    value={selectedDateTo}
                    onChange={handleDateChangeTo}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Input className="btn waves-effect waves-light" type="submit" />
          </React.Fragment>
        </form>
      </div>
    </div>
  );
}
