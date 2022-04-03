import React,{useState} from 'react';

const Demo1=()=>{
    const [name,setName]=useState('Guest'); //state
   const eventHandler=()=>
    {
        console.log('button clicked')
    }
    const loginHandler=()=>{
        setName('Rohan')
    }
    return(
        <div>
            <button onClick={eventHandler}>ClickMe</button>
            <h1>Welcome {name}</h1>
            <button onClick={loginHandler}>Login</button>
        </div>
    );
}
export default Demo1;