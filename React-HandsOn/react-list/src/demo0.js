import React from "react";

function Flowers() {
  const flowers = ["Rose", "Lilly", "Jasmine"];
  return (
    <div>
      <ul>
        {flowers.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
}
export default Flowers;
