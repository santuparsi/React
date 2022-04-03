import React from 'react';

const Person = (props) => {
    console.log(props)
    return (
        <div>
            <h1>My name is {props.name}, living in { props.age }</h1>
        </div>
    )
}
export default Person;