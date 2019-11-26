import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';

export default function FormEsquma({addOne, tierNum, desdeMin}){
    const [editable, setDisabled] = React.useState(false); 
    const [clicked, setClicked] = React.useState(false)
    
    let tier = {
        tier: tierNum,
        desde: desdeMin,
        hasta: 0,
        porcentaje: 0
    }

    const handleInput= (obj)=>{
        tier[obj.origin] = obj.value 
        console.log(tier)
    }

    const add=()=>{
         if(!clicked){
             addOne(tier)
             setDisabled(true)
             setClicked(true)
         }
         else{
             setDisabled(!editable)
         }
     }
    return(  <Row>
        <Col xs={12} sm={4}>
        <input type="number" placeholder={"Monto Desde"} disabled value={desdeMin}/>
        </Col>
        <Col xs={12} sm={4}>
        <input type="number" placeholder={"Monto Hasta"} disabled={editable} onChange={(evt)=>handleInput({origin:'hasta', value: parseInt(evt.target.value)})}/>
        </Col>
        <Col xs={12} sm={4}>
        <input type="number" min="0" max="100" placeholder={"Porcentaje"} disabled={editable} onChange={(evt)=>handleInput({origin:'porcentaje', value: parseInt(evt.target.value)})}/>
        </Col>
        <Button onClick={add}>{clicked==false?'Agregar':editable==false?'Confirmar':'Editar'} </Button>
    </Row>)
}