import React, { Component } from "react";

class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Guest",
    };
    /**
     * binding this to the component instance using bind() method
     */
    //this.loginHandler = this.loginHandler.bind(this);

  }

//   loginHandler() {
//     console.log("button clicked");
//     console.log(this)
//     // this.setState({
//     //     name: 'Mark Smith'
//     // })
//   }

  loginHandler = () => {
      console.log(this)
  }


  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>

        {/* first way
        <button onClick={this.loginHandler.bind(this)}>Login</button> */}
        {/* second way
        <button onClick={this.loginHandler} >Login</button> */}
        {/* third way
        <button onClick={ () => this.loginHandler() }>Login</button> */}
        {/* four way */}
        <button onClick={ this.loginHandler }>Login</button>
      </div>
    );
  }
}
export default ClassEvent;
