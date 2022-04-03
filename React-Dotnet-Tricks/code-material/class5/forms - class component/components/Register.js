import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  // onNameChangeHandler = (event) => {
  //     this.setState({
  //         name:  event.target.value
  //     })
  // }


  

  onChangeHandler = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
      event.preventDefault();
      const user = {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone
      }
      console.log(user)
  }

  render() {
    return (
      <div>
          <marquee>Hello.....</marquee>
        <h1>
          {this.state.name}, {this.state.email}, {this.state.phone}
        </h1>
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
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
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
export default Register;
