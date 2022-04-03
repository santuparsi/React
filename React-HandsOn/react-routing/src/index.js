import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Route,Link,BrowserRouter as Router,NavLink,Switch} from "react-router-dom";
import { About } from './about';
import { Home } from './home';
import { Contact } from './contact';
import NotFound from "./notfound";
// const routing=(
//   <Router>
//     <div>
//       <h1>React Router Example</h1>
//       <Route exact path='/' component={App} />
//       <Route path='/home' component={Home} />
//       <Route path='/about' component={About} />
//       <Route path='/contact' component={Contact} />
//     </div>
//   </Router>
// )

// const routing=(
//   <Router>
//     <div>
//       <h1>React Router Example</h1>
//       <ul>
//         <li>
//         <Link to='/home'>Home</Link>
//         </li>
//         <li>
//           <Link to='/about'>About</Link>
//         </li>
//         <li>
//           <Link to='/contact'>Contact</Link>
//         </li>
//       </ul>
//       <Route exact path='/' component={App} />
//       <Route path='/home' component={Home} />
//       <Route path='/about' component={About} />
//       <Route path='/contact' component={Contact} />
//     </div>
//   </Router>
// )

const routing=(
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
        <NavLink to='/home' exact activeStyle={
          {color:'red'}
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' exact activeStyle={
            {color:'red'}
          }>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact' exact activeStyle={
            {color:'red'}
          }>Contact</NavLink>
        </li>
      </ul>
      <Switch>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
