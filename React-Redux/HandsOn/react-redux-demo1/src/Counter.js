import React from "react";
import counterReducer from "./reducer";
import { createStore } from "redux";
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
export default Counter;
