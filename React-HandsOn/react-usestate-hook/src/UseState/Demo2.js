import { useState } from "react"
const Counter=()=>{
const [count,setCount]=useState(0);
return (
<>
<h1>Count:{count}</h1>
<button onClick={()=>setCount(count+1)}>Click Me</button>
</>
);
}
export default Counter;