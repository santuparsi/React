import { useState } from "react";

function Demo1() {
    const [uname, setUname] = useState('');
    const [msg, setMsg] = useState('');
    const handler = (e) => {
        setMsg('Hello ' + uname)
        e.preventDefault(); //prevent form submission
    }
    return (
        <form onSubmit={handler}>
            <table border={1}>
                <tr>
                    <td>Enter Name</td>
                    <td>
                        <input type="text" onChange={(e) => setUname(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="submit">Greet</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <span style={{ color: 'maroon' }}>{msg}</span>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Demo1;