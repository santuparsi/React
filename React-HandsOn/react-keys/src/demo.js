import React from "react";

function Demo() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <ul>
        {numbers.map((n) => (
          <li key={n.toString()}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
export default Demo;
