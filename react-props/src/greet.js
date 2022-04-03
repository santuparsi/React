import React from 'react'
const Greet=(props)=>{
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <p>your age {props.age}</p>
            {props.children}  {/*  to render children in the component */}
        </div>
    )
}
export default Greet