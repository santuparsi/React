import { useContext } from 'react'
import { messageContext } from './MyContexts'
function Demo2() {
    const msg = useContext(messageContext);
    return (
        <>
            <h3>{msg}</h3>
        </>
    )
}
export default Demo2;