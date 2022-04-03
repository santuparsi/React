import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StoryBox from './story-components/StoryBox';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="page-header">story-app</div>
        <StoryBox />
      </div>
    );
  }
}

export default App;
