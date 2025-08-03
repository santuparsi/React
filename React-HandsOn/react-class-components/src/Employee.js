import React from "react";
class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeId: 89878,
            employeeName: 'Rina',
            designation: 'TeamLead',
            salary: 79000

        }
    }
    handler = () => {
        this.setState({
            salary: 89000,
            designation: 'ProjectLead'
        })
    }
    render() {
        return (
            <>
                <h4>ID:{this.state.employeeId}</h4>
                <h4>Name:{this.state.employeeName}</h4>
                <h4>Designation:{this.state.designation}</h4>
                <h4>Salary:{this.state.salary}</h4>
                <button onClick={this.handler}>Update</button>
            </>
        )
    }
}
export default Employee;