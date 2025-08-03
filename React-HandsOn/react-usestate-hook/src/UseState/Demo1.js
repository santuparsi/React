import React, { useState } from "react";
const FavoriteColor = () => {
  const [color, setColor] = useState("Red");
  return (
    <>
      <h1>My Favorite Color is {color}!</h1>
      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("Orange")}>
        Orange
      </button>
      <button type="button" onClick={() => setColor("Green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("Yellow")}>
        Yellow
      </button>
    </>
  );
};
export default FavoriteColor;
