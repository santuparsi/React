import { useEffect, useState } from "react";
//Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
function Demo3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello Virat");
  }, [count]);
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
}
export default Demo3;
