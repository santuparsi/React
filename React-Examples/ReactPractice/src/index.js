import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Test} from './Demo.js';
import {TickTock} from './Demo1'
import {Welcome} from './Demo2'
import {HelloWorld} from './Demo3'
import {NameForm} from './Components/NameForm'
import {EventHandler} from './Components/EventHandler'
import {Toggle} from './Components/Toggle'
import{ChildClass} from './Components/ChildClass'
import {Parent} from './Components/Parent'
import registerServiceWorker from './registerServiceWorker';
// function formatuser(user)
// {
//     return user.firstname+' '+user.lastname;
// }
// const user={
//     firstname:'Santhosh',
//     lastname:'Parsi'
// };
// const element=(
// <h1>
//     hello,{formatuser(user)};
// </h1>
// );
ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
