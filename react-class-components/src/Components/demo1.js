import React from 'react';
export class Parent extends React.Component
{
    constructor()
    {
        super();
        this.state={val:'Sachin'}
    }
    render(){
        return(
            <Child name={this.state.val} />
        );
    }
}
class Child extends React.Component
{
    render(){
        return(
        <h1> Hello {this.props.name}</h1>
        );
    }
}
