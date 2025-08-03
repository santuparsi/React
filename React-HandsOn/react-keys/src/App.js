import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./demo";
import NumberList from "./demo1";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {/* <Demo /> */}
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
