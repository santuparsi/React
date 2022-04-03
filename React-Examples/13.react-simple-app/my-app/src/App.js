import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Calculator from './calc-components/Calculator'

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
            <div className="page-header">Calculator</div>
            <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;
