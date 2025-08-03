import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const Validate = (e) => {
        e.preventDefault();
        if (email == 'david@gmail.com' && pwd == '12345') {
            alert("Welcome User");
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <>
            <form onSubmit={Validate}>
                <table>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" onChange={(e) => setPwd(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">SignIn</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}
export default Login;