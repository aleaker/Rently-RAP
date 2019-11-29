import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function GeneralForm({
  handleChange,
  values,
  handleBankDetails
}) {
  return (
    <div>
      <Col xs={12} md={4}>
        <label>Datos Empresa</label>
        <input
          type="text"
          placeholder="Nombre o Razon Social"
          id="business_Name"
          onChange={evt => handleChange({ CompanyName: evt.target.value })}
          value={values.CompanyName}
          disabled={values.clicked}
        />
        <input
          type="text"
          placeholder="Descripcion"
          id="business_Description"
          onChange={evt => handleChange({ Description: evt.target.value })}
          disabled={values.disable}
          value={values.Description}
        />
      </Col>
      <Col xs={12} md={4}>
        <label>Direccion</label>
        <Row>
          <Col xs={6} md={4}>
            <input
              type="text"
              placeholder="Pais"
              id="business_Country"
              onChange={evt => handleChange({ Country: evt.target.value })}
              disabled={values.disable}
              value={values.Country}
            />
          </Col>
          <Col xs={6} md={4}>
            <input
              type="text"
              placeholder="Estado"
              id="business_Description"
              onChange={evt => handleChange({ state: evt.target.value })}
              disabled={values.disable}
              value={values.state}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <input
              type="text"
              placeholder="Ciudad"
              id="business_Description"
              onChange={evt => handleChange({ city: evt.target.value })}
              disabled={values.disable}
              value={values.city}
            />
          </Col>
          <Col xs={4} md={4}>
            <input
              type="text"
              placeholder="Calle"
              id="business_Description"
              onChange={evt => handleChange({ street: evt.target.value })}
              disabled={values.disable}
              value={values.street}
            />
          </Col>
          <Col xs={2} md={4}>
            <input
              type="number"
              placeholder="Numero"
              id="business_Description"
              onChange={evt => handleChange({ number: evt.target.value })}
              disabled={values.disable}
              value={values.number}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <label>Telefono</label>
        <Row>
          <Col xs={2} md={4}>
            <input
              type="text"
              placeholder="Codigo Pais"
              id="business_Description"
              onChange={evt =>
                handleChange({ internationalCountryCode: evt.target.value })
              }
              disabled={values.disable}
              value={values.internationalCountryCode}
            />
          </Col>
          <Col xs={2} md={4}>
            <input
              type="text"
              placeholder="Codigo de Area"
              id="business_Description"
              onChange={evt =>
                handleChange({ localCountryCode: evt.target.value })
              }
              disabled={values.disable}
              value={values.localCountryCode}
            />
          </Col>
          <Col xs={8} md={4}>
            <input
              type="text"
              placeholder="Telefono"
              id="business_Description"
              onChange={evt => handleChange({ phoneNumber: evt.target.value })}
              disabled={values.disable}
              value={values.phoneNumber}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <label>Datos Bancarios</label>
        <Row>
          <Col xs={4}>
            <input
              type="text"
              placeholder="Banco"
              id="business_Description"
              onChange={evt => handleBankDetails({ Bank: evt.target.value })}
              disabled={values.disable}
              value={values.BankAccountInfo.Bank}
            />
          </Col>
          <Col xs={4}>
            <input
              type="text"
              placeholder="Tipo de Cuenta"
              id="business_Description"
              onChange={evt =>
                handleBankDetails({ AccountType: evt.target.value })
              }
              disabled={values.disable}
              value={values.BankAccountInfo.AccountType}
            />
          </Col>
          <Col xs={4}>
            <input
              type="text"
              placeholder="Numero de Cuenta"
              id="business_Description"
              onChange={evt =>
                handleBankDetails({ AccountNumber: evt.target.value })
              }
              disabled={values.disable}
              value={values.BankAccountInfo.AccountNumber}
            />
          </Col>
          <Col xs={2}>
            <input
              type="text"
              placeholder="Moneda"
              id="business_Description"
              onChange={evt =>
                handleBankDetails({ Currency: evt.target.value })
              }
              disabled={values.disable}
              value={values.BankAccountInfo.Currency}
            />
          </Col>
          <Col xs={5}>
            <input
              type="text"
              placeholder="Pais"
              id="business_Description"
              onChange={evt => handleBankDetails({ Country: evt.target.value })}
              disabled={values.disable}
              value={values.BankAccountInfo.Country}
            />
          </Col>
          <Col xs={5}>
            <input
              type="text"
              placeholder="Codigo Swift"
              id="business_Description"
              onChange={evt =>
                handleBankDetails({ SwiffCode: evt.target.value })
              }
              disabled={values.disable}
              value={values.BankAccountInfo.SwiffCode}
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
}
