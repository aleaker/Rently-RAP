import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EsquemaComisiones from "../comisiones/EsquemaComision";
import Button from "@material-ui/core/Button";

export default function({
  hideCommissionSchema,
  handleChange,
  handleSubmit,
  schemaName,
  schemaFrom,
  schemaTo,
  handleSchemaData,
  disabled,
  handleSchema,
  handleCommissionSchema,
  commission,
  addNewForm,
  handleMainContact,
  forms
}) {
  console.log(forms);
  return (
    <div className="container">
      <form onSubmit={event => handleSubmit(event)}>
        <label>Nombre empresa: </label>
        <input
          required
          type="text"
          name="NombreEmpresa"
          onChange={event => handleChange({ Name: event.target.value })}
        />
        <label>Logo: </label>
        <input
          required
          type="url"
          name="Logo"
          onChange={event => handleChange({ Logo: event.target.value })}
        />
        <label>API: </label>
        <input
          required
          type="text"
          name="APIurl"
          onChange={event => handleChange({ Url: event.target.value })}
        />
        <label>Usuario: </label>
        <input
          required
          type="text"
          name="usuario"
          onChange={event => handleChange({ User: event.target.value })}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          name="password"
          onChange={event => handleChange({ Password: event.target.value })}
        />
        <label>Nombre contacto principal: </label>
        <input
          required
          type="text"
          name="firstName"
          onChange={event =>
            handleMainContact({ FirstName: event.target.value })
          }
        />
        <label>Apellido contacto principal: </label>
        <input
          required
          type="text"
          name="lastName"
          onChange={event =>
            handleMainContact({ LastName: event.target.value })
          }
        />
        <label>Email contacto principal: </label>
        <input
          required
          type="email"
          name="Email"
          onChange={event => handleMainContact({ Email: event.target.value })}
        />
        {hideCommissionSchema ? "" :
        <EsquemaComisiones
          schemaName={schemaName}
          schemaFrom={schemaFrom}
          schemaTo={schemaTo}
          handleSchemaData={handleSchemaData}
          handleCommissionSchema={handleCommissionSchema}
          handleSchema={handleSchema}
          forms={forms}
          addNewForm={addNewForm}
          commission={commission}
          onChange={event => handleChange(event)}
        />}
      </form>
      <Button type="submit" onClick={e => handleSubmit(e)}>
        AGREGAR RENTADORA
      </Button>
    </div>
  );
}
