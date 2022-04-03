import React from 'react'
const Hello=()=>{
    return (
    // <div>
    //     <h1>Hello Santhosh</h1>
    //     </div>
    React.createElement(
        'div',
        {id:'hello',className:'dummy'},
        React.createElement('h1',null,'Hello Santhosh'))
        )
}
export default Hello;