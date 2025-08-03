import React, { useState } from "react";
function Demo1() {
    //set variable
    const [count, setCount] = useState(0);
    const increment = () => {
        //update state value
        let x = count;
        x = x + 1;
        setCount(x);
        console.log(count);
    }
    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }
    return (
        <>
            <h3>Count:{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Demo1;