import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GuestGreeting from './demo';
import Greeting from './demo';
import { LoginControl } from './demo1';
import Mailbox from './demo2';
import { Page } from './demo3';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SignUp isLoggedIn={true} /> */}
    {/* <App /> */}
    {/* <LoginControl /> */}
    {/* <Page /> */}
    {/* <Mailbox unreadMessage={["React","Angular"]} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
