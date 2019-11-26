import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';




export default function NuevoEsquema({addOne}){
    const [editable, setDisabled] = React.useState(false); 
    const clicked = ()=>{
        addOne()
        setDisabled(true)

    }
    return(
        <Row>
            <Col xs={6} sm={3}>
           <input type="text" placeholder="Nombre del Esquema"/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Desde"/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Hasta"/>
           </Col>
           <Button onClick={clicked} disabled={editable}>Crear Esquema</Button>

           </Row>
    )
}