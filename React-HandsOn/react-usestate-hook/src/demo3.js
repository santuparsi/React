import { React, useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Good Morning:${name}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default MyForm;
