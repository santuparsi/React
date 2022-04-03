import React, { Component } from "react";

class ValidFormDemo extends React.Component {

    initialState = {
        nameError: '',
        emailError: '',
        passwordError: ''
    }

  constructor() {
    super();
    this.state = this.initialState;
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onChangeHandler =(event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid= this.validate();
    if(isValid){
        // valid input
        console.log('form submitted successfully');
    }
  }

  validate = () => {
      if(!this.state.name){
          this.setState({
              nameError: 'this is a requiured field'
          })
          alert('name cannt be blank')
          return false;
      }
      if(!this.state.email.includes('@')){
          alert('invalid email')
          return false;
      }
      return true;
  }

  render() {
    return (
      <div>
        <h1>{ this.state.name }, { this.state.email }, { this.state.password }</h1>
        <form onSubmit={ this.onSubmitHandler }>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
              className="form-control"
            />
            <small className="text-danger">{ this.state.nameError }</small>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
              className="form-control"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default ValidFormDemo;
