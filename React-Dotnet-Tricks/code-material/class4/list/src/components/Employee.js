import React from 'react';

const Employee = (props) => {
    //console.log(props)
    // const id = props.data.id;
    // const name = props.data.name;
    // const email = props.data.email;
    // const age = props.data.age;
    const { id, name, email, age }  = props.data;
    return (
        <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{age}</td>
            </tr>
    )
}
export default Employee;