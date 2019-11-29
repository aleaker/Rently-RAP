import React from "react";

export default function ({carRentals,handleEdit, handleDelete}){
    return (
    <div>
<table>
<thead>

  <tr>
      <th>Car Rental Name</th>
      <th>Main Contact Name</th>
      <th>Main Contact Email</th>
      <th></th>
      <th></th>
  </tr>
</thead>

<tbody>
{carRentals.map((carRental,index)=>
    <tr key={index}>
    <td>{carRental.Name}</td>
    <td>{carRental.MainContact.FirstName} {carRental.MainContact.LastName}</td>
    <td>{carRental.MainContact.Email}</td>
    <td><button><i className="small material-icons">create</i></button></td>
    <td><button onClick={()=> handleDelete(carRental)}><i className="small material-icons">delete</i></button></td>
    

  </tr>
        )}



</tbody>
</table>

    </div>)
}

