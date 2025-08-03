import React, { Component } from "react";

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
        name: 'Paul'
    }
  }

  onChangeHandler = (event) => {
      this.setState({
          name: event.target.value
      })
  }

  render() {
    return (
      <form>
          <h1>{ this.state.name }</h1>
        Enter Name : <input type="text" onChange={this.onChangeHandler} value={ this.state.name } />
      </form>
    );
  }
}
export default FormClass;