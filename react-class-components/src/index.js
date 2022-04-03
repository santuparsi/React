import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component1 from './Components/com1';
import { Parent } from "./Components/demo1";
import {  App1} from "./Components/demo2";
import { App2 } from "./Components/demo";

ReactDOM.render(<App2/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
