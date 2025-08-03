import React, { useState } from "react";

const FunctionEvent = () => {
  const [name, setName] = useState("Guest");

  const clickHandler = () => {
    console.log("button clicked");
  };

  const loginHandler = () => {
    setName("Mark");
  };

  return (
    <div>
      <h1>Heading</h1>
      <button onClick={clickHandler}>Click Me</button>

      <h1>Welcome {name} </h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
export default FunctionEvent;
