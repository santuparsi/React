import React from 'react'
export class Demo1 extends React.Component
{
    render()
    {
    let numbers=[1,2,3,4,5]
    const multiple=numbers.map((i)=>{
        return i*i;
    })
    console.log(multiple)
return <h1>{multiple}</h1>
    
    }
}