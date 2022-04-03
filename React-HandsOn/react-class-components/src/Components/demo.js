import React from 'react'
export class App2 extends React.Component
{
    constructor()
    {
        super()
        this.state={names:['Rohan','Arjun','Nakul','Sahadev']}
    }
    render()
    {
        return(
            <div>
                <ul>
        {this.state.names.map((item)=><li>{item}</li>)}
                </ul>
            </div>
        )
    }
}