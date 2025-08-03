import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import counterReducer from "./reducer";
import { createStore } from "redux";

// console.log(store);
// console.log(store.getState());
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function increment() {
  //   console.log("Hi");
  store.dispatch({ type: "INCREMENT" });
  console.log(store.getState());
}
function decrement() {
  store.dispatch({ type: "DECREMENT" });
}
const Counter = () => {
  return (
    <>
      <h1>{store.getState()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
const render = () =>
  ReactDOM.render(<Counter />, document.getElementById("root"));
render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
