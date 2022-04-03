import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageComponent from './my-components/MessageComponent';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message:'Hello..'
    };
  }  

  render() {

    let message;    
    if (this.state.message) {
      message = <MessageComponent message="This is my message"/>;
    } 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <hr/>
        <button className="btn btn-primary" onClick={() => { this.setState({ message: 'Hi' }) }}>change message to Hi</button>
        <button className="btn btn-primary" onClick={() => { this.setState({ message: '' }) }}>remove message</button>
        <button className="btn btn-primary" onClick={() => { this.forceUpdate()}}>force update</button>
        
        {message}

      </div>
    );
  }
}

export default App;
