import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "colunm",
      flexWrap: "wrap"
    }
  },
  items: {
    margin: "2%"
  }
}));

export default function DriverForm() {
  const classes = useStyles();

  const [state, setState] = useState({
    DocumentType: "",
    DocumentId: "",
    FirstName: "",
    LastName: "",
    Telephone: "",
    Email: ""  
  });


  const handleChange = e => {
        e.persist();
        setState(state => ({
          ...state,
          [e.target.name]: e.target.value
        }));
    }
    
const handleSubmit = e =>{
    e.preventDefault()
    console.log("SUBMIT", e)
}

  return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
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
          >
            {["DNI", "Pasaporte", "Cedula"].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField> 
          <TextField
            className={classes.items}
            required
            name="DocumentId"
            label="Numero de Documento"
            variant="outlined"
            onChange={handleChange}
            value={state.DocumentId}
          />
        </div>
        <div>
          <TextField
            className={classes.items}
            required
            name="FirstName"Lastname
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
  );
}
