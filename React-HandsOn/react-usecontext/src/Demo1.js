import { useContext } from 'react'
import { messageContext } from './MyContexts'
import { RoleContext } from './MyContexts';
function Demo1() {
    const msg = useContext(messageContext);
    const role = useContext(RoleContext);
    return (
        <>
            <h3>{msg}</h3>
            <h3>You logged as :{role}</h3>
        </>
    )
}
export default Demo1;