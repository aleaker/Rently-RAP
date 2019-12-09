import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export default function(props) {
  const [selectedDateFrom, setSelectedDateFrom] = React.useState("");
  const [selectedDateTo, setSelectedDateTo] = React.useState("");
  const [error, setError] = React.useState({
    Name: false,
    From: false,
    To: false,
    CommissionPercentage: false
  });
  const [state, setState] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    props
      .fetchCommission(props.match.params.id)
      .then(
        com => (
          setLoading(false),
          setState(com.commission),
          setSelectedDateTo(new Date(com.commission.ToDate)),
          setSelectedDateFrom(new Date(com.commission.FromDate))
        )
      )
      .then(() => console.log(selectedDateTo));
  }, []);

  const handleChange = e => {
    e.persist();
    setState(state => ({
      ...state,
      [e.target.id]: e.target.value
    }));

    if (e.target.value) {
      setError(error => ({
        ...error,
        [e.target.id]: false
      }));
    } else {
      setError(error => ({
        ...error,
        [e.target.id]: true
      }));
    }
  };
  const handleDateChangeFrom = date => {
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
    console.log;
    return axios
      .put(`/api/adminEmpresas/comissions/edit/${state._id}`, state)
      .then(data => data)
      .then(() => alert("El esquema se ha modificado correctamente"));
  };

  return (
    <div>
      {loading ? (
        ""
      ) : (
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
                  value={state.Name ? state.Name : ""}
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
                  value={state.From || ""}
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
                  value={state.To || ""}
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
                  value={state.CommissionPercentage || ""}
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
                    value={selectedDateFrom || ""}
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
                    value={selectedDateTo || ""}
                    onChange={handleDateChangeTo}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Input type="submit" />
          </React.Fragment>
        </form>
      )}
    </div>
  );
}
