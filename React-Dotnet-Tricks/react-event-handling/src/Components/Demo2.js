import React, { Component } from 'react';

class Demo2 extends Component
{
    constructor(props) {
        super(props);
        this.state={
            name:'Guest'
        }
    }
     loginHandler=()=>{
        this.setState({
            name:'Rohan'
        })
    }
    render(){
        return (<div>
            <h1>Welcome {this.state.name}</h1>
            <button onClick={this.loginHandler}>Login</button>
        </div>)
    }
    
}
export default Demo2;