import React from "react";
import Greeting from "./demo1";
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}
export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick = (event) => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = (event) => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (!isLoggedIn) {
      button = <LoginButton onClick={this.handleLoginClick} />;
    } else {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
