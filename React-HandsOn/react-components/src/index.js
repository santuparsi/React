import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Comment from './Comment';
// function Welcome(props)
// {
//   return  <h1>Hello,{props.name}</h1>
// }
//const element=<Welcome name="Sachin" />
const comment={
  date:new Date(),
  text:"Learning React",
  author:{
    name:'Kitty',
   url:'../public/logo192.png',
  },
};
ReactDOM.render(
<Comment date={comment.date} 
text={comment.text}
author={comment.author}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
