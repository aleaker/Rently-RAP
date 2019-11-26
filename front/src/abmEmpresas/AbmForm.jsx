import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';
import EsquemaComisiones from '../comisiones/EsquemaComision'
import ContactosPrincipales from './ContactosPrincipales'
import DatosBancarios from './DatosBanco'

export default function AbmForm({text}){

    return(
        <Col xs={12}>
        <form>
            <Col xs={12}>
           <label>Datos Empresa</label>
           <input type="text" placeholder="Nombre o Razon Social" id="business_Name"/>
           <input type="text" placeholder="Descripcion" id="business_Description"/>
           </Col>
           <Col xs={12}>
           <label>Direccion</label>
           <Row>
               <Col xs={6}>
           <input type="text" placeholder="Pais" id="business_Country"/>
           </Col>
           <Col xs={6}>
           <input type="text" placeholder="Estado" id="business_Description"/>
           </Col>
           </Row>
           <Row>
               <Col xs ={6}>
           <input type="text" placeholder="Ciudad" id="business_Description"/>
           </Col>
           <Col xs ={4}> 
           <input type="text" placeholder="Calle" id="business_Description"/>
           </Col>
           <Col xs ={2}>
           <input type="number" placeholder="Numero" id="business_Description"/>
           </Col>
           </Row>
           </Col>
           <Col xs={12}>
           <label>Telefono</label>
           <Row>
           <Col xs={2}>
           <input type="text" placeholder="Codigo Pais" id="business_Description"/>
           </Col>
           <Col xs={2}>
           <input type="text" placeholder="Codigo de Area" id="business_Description"/>
           </Col>
           <Col xs={8}>
           <input type="text" placeholder="Telefono" id="business_Description"/>
           </Col>
           </Row>
           </Col>
            <div style={{display:"inline-flex"}}>
           <EsquemaComisiones/>
           <ContactosPrincipales/>
           <DatosBancarios/>
           </div>
           <br/>
           <Button type="submit">Agregar Empresa</Button>
        </form>
        </Col>
    )
} 