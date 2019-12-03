import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';
 
export default function NewUser({addOne}){
    const [editable, setDisabled] = React.useState(false); 
    const [clicked, setClicked] = React.useState(false)
    
    let datosUsuario = {
        UserType:'adminEmpresa',
        Email:'',
        Password:'',
        FirstName:'',
        LastName:'',
    }

    const handleInput= (obj)=>{
      datosUsuario[obj.origin] = obj.value
      console.log(datosUsuario)
    }

    const add=()=>{
         if(!clicked){
             addOne()
             setDisabled(true)
             setClicked(true)
         }
         else{
             setDisabled(!editable)
         }
     }
    return(  <Row>
        <Col xs={12} sm={6}>
        <input type="text" placeholder={"Nombre"} disabled={editable} onChange={(evt)=>handleInput({origin:'FirstName', value: evt.target.value})}/>
        </Col>
        <Col xs={12} sm={6}>
        <input type="text" placeholder={"Apellido"} disabled={editable} onChange={(evt)=>handleInput({origin:'LastName', value: evt.target.value})}/>
        </Col>
        <Col xs={12} sm={6}>
        <input type="text" min="0" max="100" placeholder={"Email"} disabled={editable} onChange={(evt)=>handleInput({origin:'Email', value: evt.target.value})}/>
        </Col>
        <Col xs={12} sm={6}>
        <input type="text" min="0" max="100" placeholder={"Password"} disabled={editable} onChange={(evt)=>handleInput({origin:'Password', value: evt.target.value})}/>
        </Col>
        <Button onClick={add}>{clicked==false?'Agregar':editable==false?'Confirmar':'Editar'} </Button>
    </Row>)
}
