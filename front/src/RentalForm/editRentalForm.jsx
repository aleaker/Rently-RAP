import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



export default function({
  handleChange,
  handleSubmit,
}) {

  return (
    <div className="container">
      <form onSubmit={event => handleSubmit(event)}>
        <label>Nombre empresa: </label>
        <input
          required
          type="text"
          name="NombreEmpresa"
          onChange={event => handleChange( event)}
        />
        <label>Logo: </label>
        <input
          required
          type="url"
          name="Logo"
          onChange={event => handleChange( event)}
        />
        <label>API: </label>
        <input
          required
          type="text"
          name="APIurl"
          onChange={event => handleChange( event)}
        />
        <label>Usuario: </label>
        <input
          required
          type="text"
          name="usuario"
          onChange={event => handleChange( event)}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          name="password"
          onChange={event => handleChange( event)}
         
        />
        <label>Nombre contacto principal: </label>
        <input
          required
          type="text"
          name="firstName"
          onChange={event => handleChange( event)}
        
        />
        <label>Apellido contacto principal: </label>
        <input
          required
          type="text"
          name="lastName"
          onChange={event => handleChange( event)}
       
        />
        <label>Email contacto principal: </label>
        <input
          required
          type="email"
          name="Email"
          onChange={event => handleChange( event)}
          
        />

      </form>
      <button type="submit" onClick={handleSubmit}>
        EDITAR RENTADORA
      </button>
    </div>
  );
}
