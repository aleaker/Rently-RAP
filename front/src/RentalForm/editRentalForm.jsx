import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function({ selectedRental, handleChange, handleSubmit }) {
  return (
    <div className="container">
      <form onSubmit={event => handleSubmit(event)}>
        <input
          required
          value={selectedRental.Name}
          type="text"
          name="NombreEmpresa"
          onChange={event => handleChange(event)}
        />
        <label>Nombre empresa: </label>
        <input
          required
          value={selectedRental.Logo}
          type="url"
          name="Logo"
          onChange={event => handleChange(event)}
        />
        <label>Logo: </label>
        <input
          required
          value={selectedRental.Url}
          type="text"
          name="APIurl"
          onChange={event => handleChange(event)}
        />
        <label>API: </label>
        <input
          required
          value={selectedRental.User}
          type="text"
          name="usuario"
          onChange={event => handleChange(event)}
        />
        <label>Usuario: </label>
        <input
          required
          value={selectedRental.Password}
          type="password"
          name="password"
          onChange={event => handleChange(event)}
        />
        <label>Password: </label>
        <input
          required
          value={selectedRental.MainContact.FirstName}
          type="text"
          name="firstName"
          onChange={event => handleChange(event)}
        />
        <label>Nombre contacto principal: </label>
        <input
          required
          value={selectedRental.MainContact.LastName}
          type="text"
          name="lastName"
          onChange={event => handleChange(event)}
        />
        <label>Apellido contacto principal: </label>
        <input
          required
          value={selectedRental.MainContact.Email}
          type="email"
          name="Email"
          onChange={event => handleChange(event)}
        />
        <label>Email contacto principal: </label>
      </form>
      <button
        type="submit"
        className="btn waves-effect waves-light"
        onClick={handleSubmit}
      >
        EDITAR RENTADORA
      </button>
    </div>
  );
}
