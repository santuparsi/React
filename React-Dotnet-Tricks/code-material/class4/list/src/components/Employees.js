import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const employeeData = [
    { id: 1, name: "Mark", email: "m@gmail.com", age: 30 },
    { id: 2, name: "Paul", email: "p@gmail.com", age: 40 },
    { id: 3, name: "Watson", email: "w@gmail.com", age: 50 },
    { id: 4, name: "Stacy", email: "s@gmail.com", age: 60 },
  ];

  return (
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
          {employeeData.map((item) => <Employee data={ item } key={item.id} /> )}
        </tbody>
      </table>
    </div>
  );
};
export default Employees;
