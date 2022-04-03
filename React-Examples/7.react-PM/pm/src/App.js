import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PM from './pm-components/PM';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">React - PM </div>
        <PM />
      </div>
    );
  }
}

export default App;
