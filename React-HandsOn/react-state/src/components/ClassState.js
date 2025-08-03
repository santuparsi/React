import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      name: "Guest",
      email: 'guest@gmail.com'
    };
  }

  onButonClickHandler(){
      console.log('Before', this.state.name)
    //   this.state.name = "Mark";
    this.setState({
        name: 'Mark'
        
    })
      console.log('After', this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Welcome { this.state.name }, { this.state.email }</h1>
        <button onClick={ () => this.onButonClickHandler() }>Login</button>
      </div>
    );
  }
}

export default Message;
