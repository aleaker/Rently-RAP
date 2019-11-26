import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';




export default function NuevoEsquema(props){
    return(
        <Row>
        <Col xs={12} sm={6}>
        <input type="text" placeholder="Nombre o ID del esquema"/>
        </Col>
        <Col xs={6} sm={6}>
            <Button >Buscar</Button>
        </Col>
        </Row>)
}