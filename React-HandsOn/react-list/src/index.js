import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Demo1 } from './demo1';
import { Demo2 } from './demo2';
//import NameList from './demo3';
import { Demo4 } from './demo4';
import NameList from './NameList';
import PersonList from './PersonList';

const list=["Rohan","Sachin"];
const displaylist=list.map((item)=>
<li>{item}</li>
);
ReactDOM.render(
  <React.StrictMode>
    {/* <PersonList /> */}
    {/* <NameList /> */}
    {/* <ul>{displaylist}</ul> */}
    {/* <NameList myLists={list} /> */}
    {/* <Demo4 /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
