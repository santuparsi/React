import React from "react";

function Football() {
  const shoot = () => {
    alert("Great Shot");
  };
  return (
    <div>
      <button onClick={shoot}>Take the Shot!</button>
    </div>
  );
}
export default Football;
