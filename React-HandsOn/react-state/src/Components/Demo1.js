import React from 'react'
export class Demo1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={result:false}
        //this.f=this.f.bind(this)
    }
    f=(event)=>
    {
        this.setState({result:true})
    }
    render(){
        let bio=this.state.result?(<h1>
            React is a Javascript framework for SPA development.
        </h1>):(<h1>
            React Native is a Javascript framework for Mobile App development
        </h1>)
        return(
            <div>
            {bio}
            <button onClick={this.f}>Clcik Me</button>
            </div>
        )
    }
}