import React, { Component } from 'react';
class Message extends React.Component {
    constructor() {
        super();
        //define the states
        this.state={
            name:'Guest',
            email:'guest@gmail.com'
        }
    }
    //updating the states
    onButtonClickHander(){
        console.log('button clicked')
        //setState is used to set the values to state properties
      this.setState({
          name:'Mark',
          email:'mark@gamil.com'
      })
    }
    
    render() { 
        return <div>
            <h1>Welcome {this.state.name}</h1>
            <h1>Email:{this.state.email}</h1>
            <button onClick={()=>this.onButtonClickHander()}>LogIn</button>
        </div>;
    }
}
 
export default Message;