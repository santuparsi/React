import React from 'react'
export class App1 extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:[
                {name:'Abhi'},
                {name:'Rohan'},
                {name:'Nakul'},
                {name:'Bheem'},
            ]
        };
    }
    render()
    {
        return(
            <div>
                <Student/>
                <ul>
                    {/* {this.state.data.map(i=><li>{i.name}</li>)} */}
                    {this.state.data.map((item)=><List data={item} />)}
                </ul>
            </div>
        );
    }
}
class Student extends React.Component
{
    render()
    {
        return(
            <h1>Student Details</h1>
        );
    }
}
class List extends React.Component
{
    render()
    {
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}

