import React, { Component } from 'react';

class Employee extends Component{

    // constructor(props){
    //     super(props)
    // }


    render(){
        // const name = this.props.name;
        // const email = this.props.email;
        const { name, email } = this.props;
        return (
            <div>
                {/* <h1>Name: {this.props.name}, Email: {this.props.email}</h1> */}
                <h1>Name: {name}, Email: {email}</h1>
            </div>
        )
    }
}
export default Employee;
