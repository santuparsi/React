import React, { Component } from 'react';

class Employee extends Component
{
    // constructor(props) { //optional use it as per the best practices
    //     super(props);
        
    // }
    
    render(){
        //local variable
        // const name=this.props.name;
        // const city=this.props.city;
        const {name,city}=this.props; //de-stucturing added from ES6
        return (
            <div>
                {/* <h1>Name:{this.props.name} living in {this.props.city}</h1> */}
                <h2>Name:{name} living in {city}</h2>
            </div>
        )
    }
}
export default Employee;