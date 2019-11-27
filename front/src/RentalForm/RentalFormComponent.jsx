import React from "react";

export default function({handleChange, handleSubmit}){
    return(
        <div>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <label>Nombre empresa: </label>
                <input type="text" name="NombreEmpresa" onChange={event=>handleChange(event)}/>
                <label>Logo: </label>
                <input type="url" name="Logo" onChange={event=>handleChange(event)}/>
                <label>API: </label>
                <input type="text" name="APIurl" onChange={event=>handleChange(event)}/>
                <label>Usuario: </label>
                <input type="text" name="usuario" onChange={event=>handleChange(event)}/>
                <label>Password: </label>
                <input type="password" name="password" onChange={event=>handleChange(event)}/>
                <label>Nombre contacto principal: </label>
                <input type="text" name="firstName" onChange={event=>handleChange(event)}/>
                <label>Apellido contacto principal: </label>
                <input type="text" name="lastName" onChange={event=>handleChange(event)}/>
                <label>Email contacto principal: </label>
                <input type="email" name="Email" onChange={event=>handleChange(event)}/>
                <label>Esquema de comisiones: </label>
                <input type="text" name="EsquemaDeComisiones" onChange={event=>handleChange(event)}/>
            
                <button type="submit">Agregar</button>
            </form>
            
        </div>
    )
}







// Nombre de la rentadora, Logo, Nombre y mail del contacto principal, API, Esquema de comisiones a cobrar