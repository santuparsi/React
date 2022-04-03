import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form2 from './Form2'
import Form3 from './Form3'
import Form8 from './Form8'
import * as serviceWorker from './serviceWorker';
import Login  from './Login';
import {Link,BrowserRouter as Router, Route} from 'react-router-dom'
import { FlavorForm } from './demo1';
const routing=(
    <Router>
       
        <Route  path='/register' component={Form8} />
        <Route exact path='/' component={Login} />
    </Router>
)
// ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
