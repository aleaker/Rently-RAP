import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';




export default function NuevoEsquema({addOne}){
    const [editable, setDisabled] = React.useState(false); 
    const clicked = ()=>{
        addOne(datosEsquema)
        setDisabled(true)
    }

    let datosEsquema = {
        Name: '',
        FromDate: '',
        ToDate: ''
    }

    const handleChange = (obj)=>{
        datosEsquema[obj.origin] = obj.value 
    }
    return(
        <Row>
            <Col xs={6} sm={3}>
           <input type="text" placeholder="Nombre del Esquema" onChange={(evt)=>handleChange({origin: 'Name', value: evt.target.value})}/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Desde" onChange={(evt)=>handleChange({origin: 'FromDate', value: evt.target.value})}/>
           </Col>
           <Col xs={6} sm={3}>
           <input type="date" placeholder="Fecha Hasta"onChange={(evt)=>handleChange({origin: 'ToDate', value: evt.target.value})}/>
           </Col>
           <Button onClick={clicked} disabled={editable}>Crear Esquema</Button>

           </Row>
    )
}