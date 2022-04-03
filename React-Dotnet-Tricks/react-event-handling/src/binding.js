import React, { Component } from 'react'

export default class binding extends Component {
    constructor() {
        super(); //calling base constructor
        this.state={
            name:'Mohan',
            addr:'Hyderabad'
        }
        
    }
    handleChange=(event)=>{
    this.setState({name:event.target.value})
    }
    handlerClick=()=>
    {
        alert('Button Clicked');
    }
    handlerClickWithParam=(name)=>
    {
        alert('Button Clicked '+name);
    }
    render() {
        return (
            <div>
                <h1>DataBinding</h1>
                <p>{this.state.name}</p>
                <input type='text' value={this.state.name} onChange={this.handleChange}></input>
                <h1>Event Handling</h1>
                <button onClick={this.handlerClick}>ClickMe</button>
                <h1>Event Handling with Params</h1>
                <button onClick={()=>this.handlerClickWithParam('Sachin')}>ClickMe</button>
                <button onClick={()=>this.handlerClickWithParam('Peter')}>ClickMe</button>
            </div>
        )
    }
}
