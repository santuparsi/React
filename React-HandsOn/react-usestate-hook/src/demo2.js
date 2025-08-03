import { React, useState } from "react";


function MyForm() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <label>
          Enter Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default MyForm;
