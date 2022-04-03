import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Demo1 } from './Components/Demo1';
import Message from './Components/message';
import Counter from './Components/counter';

ReactDOM.render(
  <React.StrictMode>
    {/* <Demo1 /> */}
    {/* <Message /> */}
  <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
