import React from "react";

function Football() {
  const shot = (a) => {
    alert(a);
  };
  return (
    <div>
      <button onClick={() => shot("Goal")}>Take a Shot!</button>
    </div>
  );
}
export default Football;
