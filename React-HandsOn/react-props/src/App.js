import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./greet";
import Welcome from "./welcome";
import Garage from "./car";
import ClassRoom from "./student";
function App() {
  return (
    <div className="App">
      {/* <Greet name='Sachin' age="44">
       <p>Sachin is a Crickter</p>
     </Greet>
     <Greet name='Dravid' age="42" />
     <Greet name='Ganguly' age="45" />
    <Welcome name="Rahul"></Welcome> */}
      {/* <Garage></Garage> */}
      <ClassRoom />
    </div>
  );
}

export default App;
