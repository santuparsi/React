import React from 'react';
const Employee=(props)=>{
return(
    <tr>
    {/* <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td>{props.age}</td> */}
     <td>{props.data.id}</td>
    <td>{props.data.name}</td>
    <td>{props.data.email}</td>
    <td>{props.data.age}</td>
</tr>
)
}
export default Employee;