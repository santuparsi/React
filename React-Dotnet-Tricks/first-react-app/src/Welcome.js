import React from 'react'
const Welcome=()=>{
//with JSX
// return <div>
//     <h1>Welcome User</h1>
// </div>
//without JSC
return React.createElement(
    'div',null,'welcome user'
)
}
export default Welcome;