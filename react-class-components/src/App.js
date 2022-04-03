import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component
{
  render(){
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
class Header extends React.Component
{
  render(){
    return(
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends React.Component
{
  render()
  {
    return(
      <div>
        <h2>Content</h2>
        <p>The Content Text!!</p>
      </div>
    )
  }
}
export default App;
