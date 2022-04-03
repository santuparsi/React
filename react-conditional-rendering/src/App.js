import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserGreeting from './UserGreeting';
import Greeting from './demo';
import SignUp from './demo1.1';
import { LoginControl } from './demo1';
import Mailbox from './demo2';
import { Page } from './demo3';

function App() {
  return (
    <div className="App">
       {/* <UserGreeting isLoggedIn={true} /> */}
       {/* <Greeting isLoggedIn={false}/> */}
       {/* <SignUp isLoggedIn={false}/> */}
       {/* <LoginControl/> */}
       {/* <Mailbox unreadMessage='0' /> */}
       <Page />
    </div>
  );
}

export default App;
