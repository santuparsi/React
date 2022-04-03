import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet}  from './Greet';

class App extends React.Component
{
  render(){
    return(
    <div>
      {/* <First />
    <Second /> */}
    <Greet />
    </div>
    );
  }
}
  
class First extends React.Component
{
  render(){
    return(
    <div>
    <h1>Welcome to React Programming</h1>
    </div>
     )}
}
class Second extends React.Component
{
  render(){
    return (
      <div>
        <h1>React Native is mobile first Application framework</h1>
        <h2>For More info <a href='#'>www.react.com</a></h2>
      </div>
    );
  }
}


export default App;
