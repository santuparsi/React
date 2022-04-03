import React  from "react";
// export function Greet()
// {
//     return <h1>Hello Santhosh</h1>
// }
// export const Greet=()=><h1>Hello Sahin</h1> //Named export
//  const Greet=()=><h1>Hello Rahul</h1>
 //using Properties
 const Greet=(props)=>
 {
    console.log(props);
 return (<h1>Hello {props.name} Age: {props.age}</h1>)
}
export default Greet
