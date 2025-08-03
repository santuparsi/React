import React, { useState}  from 'react';

const Register = () => {
    // const [name, setName] = useState('mark');
    // const [email, setEmail] = useState('m@gmail.com');
    // const [address, setAddress] = useState('india');
    const [{name, email, address}, setUser] = useState({ name:'Mark', email: 'm@gamil.com', address:'USA' })


    const onButtonClickHandler = () => {
        // setName('New Name');
        // setEmail('New Email');
        // setAddress('New Address');
        setUser({
            name: 'Paul',
            email: email,
            address: 'India'
        })
    } 

    return (
        <div>
            <h1>Name: { name }</h1>
            <h1>Email: { email }</h1>
            <h1>Address: { address }</h1>
            <button onClick={ onButtonClickHandler } >Update</button>
        </div>
    )
}
export default Register;