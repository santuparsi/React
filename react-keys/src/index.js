import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NumberList from './demo1';
import NumberList1 from './demo2';
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <React.StrictMode>
    <NumberList numbers={numbers}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
