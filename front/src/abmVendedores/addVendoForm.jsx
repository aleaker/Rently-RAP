import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

//Form con campos: usertype, firstname, lastname, email, password, company, telephone, photo

export default function AddVendedorForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form
        onSubmit={props.handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <Input
          onChange={props.onInputChange}
          className={classes.input}
          placeholder="Tipo de usuario"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.usertype}
          name="UserType"
        />
        <Input
          onChange={props.onInputChange}
          className={classes.input}
          placeholder="Nombre"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.FirstName}
          name="FirstName"
        />
        <Input
          onChange={props.onInputChange}
          placeholder="Apellido"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.LastName}
          name="LastName"
        />
        <Input
          onChange={props.onInputChange}
          className={classes.input}
          placeholder="Id de la Empresa"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.Company}
          name="Company"
        />

        <Input
          onChange={props.onInputChange}
          placeholder="Email"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.Email}
          name="Email"
          type="email"
        />
        <Input
          onChange={props.onInputChange}
          placeholder="Contraseña"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
          value={props.Password}
          name="Password"
          type="password"
        />
        <Input
          onChange={props.onInputChange}
          className={classes.input}
          placeholder="Id de la Comision"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.ComissionScheme}
          name="ComissionScheme"
        />
        <Input
          onChange={props.onInputChange}
          className={classes.input}
          placeholder="Telefono"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.Telephone}
          name="Telephone"
        />
        <Input
          type="file"
          onChange={props.handleChangePhoto}
          className={classes.input}
          placeholder="Foto"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.Photo}
          name="Photo"
        />

        <Button style={{ fontFamily: "courier" }} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
