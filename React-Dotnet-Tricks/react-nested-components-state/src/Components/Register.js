import React,{useState} from 'react';
const Register=()=>{
    // const [name,setName]=useState('Rahul');
    // const [email,setemail]=useState('rahul@gmail.com');
    // const [address,setaddress]=useState('USA');
    const [{name,email,address},setUser]=useState({name:'Rahul',email:'rahul@gamil.com',address:'USA'})
    const onButtonClickHandler=()=>{
// setName('Mark');
// setemail('mark@gmail.com');
// setaddress('NewYork');
setUser({
    name:'Mark',
    // email:'mark@gmail.com',
    email:email,
    address:'London'
})
    }
    return (
       <div>
            <h1>Name:{name} </h1>
        <h1>Email:{email} </h1>
        <h1>Address:{address} </h1>
        <button onClick={onButtonClickHandler}>Update</button>
       </div>
    );
}
export default Register;