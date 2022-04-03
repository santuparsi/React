import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Sachin" age="45" />
      <Welcome name="Rahul" age="44" />
    </div>
  );
}

export default App;
