import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import Counter from "./Counter";
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function increment() {
  store.dispatch({ type: "INCREMENT" });
}
function decrement() {
  store.dispatch({ type: "DECREMENT" });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter
      state={store.getState()}
      increment={increment}
      decrement={decrement}
    />
  </React.StrictMode>
);
//The subscribe method in redux helps us to re-render our app whenever the state is updated.
store.subscribe(() => {
  root.render(
    <Counter
      state={store.getState()}
      increment={increment}
      decrement={decrement}
    />
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
