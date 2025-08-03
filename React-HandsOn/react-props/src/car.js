import React from "react";

function Car(props) {
  return (
    <div>
      <h2>I am a {props.brand}</h2>
    </div>
  );
}
function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my Garage</h1>
      <Car brand="Audi"></Car>
      <Car brand={carName}></Car>
    </>
  );
}

export default Garage;
