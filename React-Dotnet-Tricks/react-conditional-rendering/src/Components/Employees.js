import React from 'react';
import Employee from './Employee';
const Employees=()=>
{
    const employeeData=[
        {id:1,name:'Mark',email:'m@gmail.com',age:30},
        {id:2,name:'Ani',email:'a@gmail.com',age:40},
        {id:3,name:'Boni',email:'b@gmail.com',age:40},
        {id:4,name:'Chethan',email:'c@gmail.com',age:50},
    ]
    return(
        <div>
            <h1>Employee List</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData.map(item=>(
                        //    <Employee id={data.id} name={data.name} email={data.email} age={data.age}/>
                        <Employee data={item} key={item.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Employees;