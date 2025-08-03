import { useEffect } from 'react';
function Demo1() {
    //invokes when the component render first time
    useEffect(() => {
        alert('Hello World!!')
    })
    return (
        <>
            <h1>useEffect Demo</h1>
        </>
    )
}
export default Demo1;