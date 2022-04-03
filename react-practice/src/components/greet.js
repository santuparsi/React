import React from 'react'
// const Greet=props=>{
//     return (
//         <div>
//             <h1>Hello {props.name},your age is {props.age}</h1>
//         </div>
//     )
// }
//Destructuring props
// const Greet=({name,age})=>{
//     return (
//         <div>
//             <h1>Hello {name} your age is {age}</h1>
//         </div>
//     )
// }
//Destructuring props method-2
const Greet=(props)=>{
    const {name,age}=props
    return (
        <div>
            <h1>Hello {name} your age is {age}</h1>
        </div>
    )
}
export default Greet