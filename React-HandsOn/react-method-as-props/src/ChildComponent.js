import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Click</button>
            <button onClick={()=>props.greet('Sachin')}>Greet</button> {/* passing parameeter */}
        </div>
    )
}

export default ChildComponent
