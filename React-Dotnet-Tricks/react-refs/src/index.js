import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateProps from './state-props-refs';
import Demo from './ref';
import Demo1 from './Demo1'
ReactDOM.render(
  <React.StrictMode>
    {/* <StateProps></StateProps> */}
    {/* <Demo></Demo> */}
    <Demo1></Demo1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
