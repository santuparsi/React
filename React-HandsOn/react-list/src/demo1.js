import React from "react";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}
function Garage() {
  const cars = ["Audi", "Benz", "Ford"];
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </div>
  );
}
export default Garage;
