import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export class Parent extends Component
{
constructor(props)
{
  super(props);
  this.state={name:'Santhosh'};
}
render()
{
  return <Child name={this.state.name} />
}
}
class Child extends Component
{
  Greet()
  {
    let v='Sachin';
    alert("Hello "+v);
  }
render(){
  return(
<div>
  <h1>Hello {this.props.name}</h1>
  <input type="text" name="" id="" value={this.props.name} /><br />
  <button onClick={this.Greet}>ClickMe</button>
</div>
  );
}

}

