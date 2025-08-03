import { React, useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Good Morning:${name} you are ${age} years old`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input type="text" value={name} onChange={handleName} />
          Enter Age:
          <input type="number" value={age} onChange={handleAge} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default MyForm;
