import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import TimersDashboard from './timer-components/TimersDashboard'; 

import 'semantic-ui-css/semantic.css';

class App extends Component {


  render() {

    return (
      <div>
        <TimersDashboard /> 
      </div>
    );
  }
}

export default App;
