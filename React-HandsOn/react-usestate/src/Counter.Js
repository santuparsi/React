import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (

        <>
            <h3>You Clicked {count} times</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}
export default Counter;