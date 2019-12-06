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
      <div className="card card-body">
        <h4>Registrar rentadora</h4>
        <div className="form-group">
          <form onSubmit={event => handleSubmit(event)}>
            <input
              className="form-control"
              required
              type="text"
              name="NombreEmpresa"
              placeholder="Nombre de la rentadora"
              onChange={event => handleChange({ Name: event.target.value })}
            />
            <label>Company name: </label>
            <input
              className="form-control"
              required
              type="url"
              name="Logo"
              placeholder="Logo de la empresa"
              onChange={event => handleChange({ Logo: event.target.value })}
            />
            <label>Logo: </label>
            <input
              className="form-control"
              required
              type="text"
              name="APIurl"
              placeholder="URL de la API"
              onChange={event => handleChange({ Url: event.target.value })}
            />
            <label>API: </label>
            <input
              className="form-control"
              required
              type="text"
              name="usuario"
              placeholder="Nombre de usuario"
              onChange={event => handleChange({ User: event.target.value })}
            />
            <label>Username: </label>
            <input
              className="form-control"
              required
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={event => handleChange({ Password: event.target.value })}
            />
            <label>Password: </label>
            <h4>Datos del contacto principal</h4>
            <input
              className="form-control"
              required
              type="text"
              name="firstName"
              placeholder="Nombre del contacto principal"
              onChange={event =>
                handleMainContact({ FirstName: event.target.value })
              }
            />
            <label>First name</label>
            <input
              className="form-control"
              required
              type="text"
              name="lastName"
              placeholder="Apellido"
              onChange={event =>
                handleMainContact({ LastName: event.target.value })
              }
            />
            <label>Last name</label>
            <input
              className="form-control"
              required
              type="email"
              name="Email"
              placeholder="Email"
              onChange={event =>
                handleMainContact({ Email: event.target.value })
              }
            />
            <label>Email</label>
            {hideCommissionSchema ? (
              ""
            ) : (
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
              />
            )}
          </form>
          <Button
            className="btn waves-effect waves-light"
            type="submit"
            onClick={e => handleSubmit(e)}
          >
            AGREGAR RENTADORA
          </Button>
        </div>
      </div>
    </div>
  );
}
