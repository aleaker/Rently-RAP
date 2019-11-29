import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';

export default function FormEsquma({minValue, Name, addOne, tierNum, datosEsquema, handleChange, handleCommissionSchema, order, commission }){
    let montoDesde = commission[order]!=undefined?commission[order]['From']:''
    let montoHasta = commission[order]!=undefined?commission[order]['To']:''
    let montoPorcentaje = commission[order]!=undefined?commission[order].CommissionPercentage:''

    const [editable, setDisabled] = React.useState(false); 
    const [clicked, setClicked] = React.useState(false)
    const [message, setMessage] = React.useState(false)

    const [desde, setDesde] = React.useState(montoDesde)
    const [hasta, setHasta] = React.useState(montoHasta)
    const [porcentaje, setPorcentaje] = React.useState(montoPorcentaje)

    

    let tier = {
        Name: datosEsquema.Name,
        FromDate: datosEsquema.From,
        ToDate: datosEsquema.To,
        From: minValue,
        To: hasta,
        CommissionPercentage: 0,
        Type: 'Company'
    }

    const setCommission= (obj)=>{
        tier[obj.origin] = obj.value
        handleCommissionSchema(tier, order)
        if(obj.origin == 'From'){setDesde(obj.value)} 
        else if(obj.origin == 'To'){setHasta(obj.value)} 
        else if(obj.origin == 'CommissionPercentage'){setPorcentaje(obj.value)}
    }

    const add=()=>{
         if(!clicked && hasta != ''){
            //  if(isNaN(hasta)){
            //      tier['To'] = desde * 5
            //  }
             setMessage(false)
             addOne(tier)
             setDisabled(true)
             setClicked(true)
         }
         else{
             setDisabled(!editable)
         }
     }
 
    return( 
        <Row>
        <Col xs={12} sm={4}>
        <input type="number" placeholder={'Monto Desde'} disabled={editable} 
        onChange={(evt)=> setCommission({origin:'From', value: parseInt(evt.target.value)})}
        value={minValue}
        disabled={true}
        />
        </Col>
        <Col xs={12} sm={4}>
        <input type="number" placeholder={"Monto Hasta"} disabled={editable} 
        onChange={(evt)=> setCommission({origin:'To', value: parseInt(evt.target.value)})}
        value={hasta}
     />
        </Col>
        <Col xs={12} sm={4}>
        <input type="number" min="0" max="100" placeholder={"Porcentaje"} disabled={editable} 
        onChange={(evt)=> setCommission({origin:'CommissionPercentage', value: parseInt(evt.target.value)})}
        value={porcentaje}
        />
        </Col>
        {desde>hasta? <p>Verifica los datos ingresados</p>:''}
        <Button disabled={desde>hasta} onClick={add}>{(clicked==false && desde=='' )?'Agregar':editable==false?'Confirmar':'Editar'} </Button>
    </Row>)
}