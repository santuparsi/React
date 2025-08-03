import { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Fiyasta",
    color: "Red",
    year: "1980",
  });
  const updateColor = () => {
    setCar((previouseState) => ({
      ...previouseState,
      color: "Greeen",
      year: 1990,
    }));
  };
  return (
    <>
      <h1>my {car.brand}</h1>
      <p>
        It is {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateColor}>SetColor</button>
    </>
  );
};
export default Car;
