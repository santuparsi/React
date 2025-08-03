import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NumberList from './demo1';
import NumberList1 from './demo2';
const numbers = [1, 2, 3, 4, 5];
let react=ReactDOM.createRoot(
  
  document.getElementById('root')
);
react.render(<App />)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
