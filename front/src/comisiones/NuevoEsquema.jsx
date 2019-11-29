import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';




export default function NuevoEsquema({addOne,  handleSchemaData, schemaName, schemaFrom, schemaTo}){
    const [editable, setDisabled] = React.useState(false); 
    
    const clicked = ()=>{
        addOne(datosEsquema)
        setDisabled(true)
    }

    let datosEsquema = {
        Name: '',
        FromDate: '',
        ToDate: '',
        From: '',
        To: ''
    }

    return(
        <Row>
            <Col xs={6} sm={3}>
           <input type="text" placeholder="Nombre del Esquema" onChange={(evt)=>handleSchemaData({schemaName: evt.target.value})}
           value={schemaName}/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Desde" onChange={(evt)=>handleSchemaData({schemaFrom: evt.target.value})}
           value={schemaFrom}/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Hasta"onChange={(evt)=>handleSchemaData({schemaTo: evt.target.value})}
           value={schemaTo}/>
           </Col>
           <Button onClick={clicked} disabled={editable}>Crear Esquema</Button>

           </Row>
    )
}