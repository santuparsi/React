import React, { useState } from 'react';
const User = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    // if (isLoggedIn) {
    //     return <h1>Welcome Mark</h1>
    // } else {
    //     return <h1>Welcome Guest</h1>
    // }
    // let response;
    // if(isLoggedIn)
    // {
    //     response=<h1>Welcome Mark</h1>
    // }else
    // {
    //     response=<h1>Welcome Guest</h1>
    // }
    // return (
    //     <div>{response}</div>
    // )
    // return (
    //     // isLoggedIn?<h1>Welcome Mark</h1>:<h1>Welcome Guest</h1>
    //     isLoggedIn?<button className='btn btn-primary'>LogOut</button>:<button>LogIn</button>
    // )
    return (
        isLoggedIn && <h1>Welcome Mark</h1> //display when condtion true //short circute breaker syntax
    )
}
export default User;