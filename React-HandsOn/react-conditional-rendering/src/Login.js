function Guest() {
    return (<h1>Welcome to Guest!!!</h1>)
}
function User() {
    return (<h1>Welcome to User</h1>)
}
function Login({ isLoggedUser }) {
    const isLogged = isLoggedUser;
    if (isLogged == true)
        return <User />
    else if (isLogged == false)
        return <Guest />
}
export default Login;