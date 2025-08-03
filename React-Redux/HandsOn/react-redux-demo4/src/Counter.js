import React from "react";

export default function Counter(props) {
  return (
    <div>
      <h1>{props.state}</h1>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
}
