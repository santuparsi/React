import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Greet from "./greet";
import ex1 from "./ex1";
import Ex1 from "./ex1";
import Ex2 from "./ex2";
import Ex3 from "./ex3";
import Ex4 from "./ex4";
import Ex5 from "./ex5";
const myElement = <h1>I Love JSX!</h1>; //with JSX
const myElement1 = React.createElement("h1", {}, "I do not use JSX!"); //create react element with out JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ex5 />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
