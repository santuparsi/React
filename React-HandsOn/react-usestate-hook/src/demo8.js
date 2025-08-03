import { React, useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((valeues) => ({ ...valeues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`Good Morning:${inputs.name} you are ${inputs.age} years old`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input
            type="text"
            name="name"
            value={inputs.name||''}
            onChange={handleChange}
          />
          Enter Age:
          <input
            type="number"
            name="age"
            value={inputs.age||''}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default MyForm;
