import React from 'react'
export class Demo4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={list:[
            {name:'Rohan',age:12},
            {name:'Karan',age:12},
            {name:'Arjun',age:12},
            {name:'Nakul',age:12},
            {name:'Bheema',age:12},
        ]}
    }
    render()
    {
        return(
            <div>
                {/* <ul>
        {this.state.list.map((item)=><li>{item.name+' '+item.age}</li>)}
                </ul> */}
                <table border="1">
                   <tbody>
                   <tr>
                        <td>Name</td><td>Age</td>
                    </tr>
            {this.state.list.map((item)=><tr><td>{item.name}</td><td>{item.age}</td></tr>)}
                   </tbody>
                </table>
            </div>
        )
    }
}