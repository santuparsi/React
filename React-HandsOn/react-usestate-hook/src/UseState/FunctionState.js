import React, { useState } from "react";

const FunctionState = () => {
  const [user, setUser] = useState('Guest2');

  function onButtonClick() {
    setUser("Mark");
  }

  return (
    <div>
      <h1>Hello {user}</h1>
      <button onClick={onButtonClick}>Login</button>
    </div>
  );
};
export default FunctionState;
