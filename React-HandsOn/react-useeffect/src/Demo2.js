import { useEffect, useState } from 'react'
function Demo2() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(count + 1)
    }, []) //dependency array makes to trigger useEffect only once
    return (
        <>
            <h1>The Dom Render {count} times</h1>
        </>
    )
}
export default Demo2;