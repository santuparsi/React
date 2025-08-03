import { useState } from "react";
const Car = () => {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Fiyasta");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
    </>
  );
};
export default Car;
