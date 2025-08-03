import { React, useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Good Morning:${name}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input type="text" value={name} onChange={handleName} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default MyForm;
