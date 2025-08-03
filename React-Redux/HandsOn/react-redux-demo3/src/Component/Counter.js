import React from "react";
const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={increment}>INCREMENTED BY 1</button>
      </div>
      <div>
        <button onClick={decrement}>DECREMENTED BY 1</button>
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );
};
export default Counter;
