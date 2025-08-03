import React from 'react'
export class Demo2 extends React.Component
{
    render()
    {
    let list=["Rohan","John","Sachin"]
    return (
        <ul>
            {list.map((i)=><li>{i}</li>)}
        </ul>
    )
    
    }
}