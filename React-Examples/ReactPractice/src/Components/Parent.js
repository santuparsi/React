import React,{Component} from 'react';
import {Child} from './Child'
export class Parent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={name:"Sachin"};
        this.changeName=this.changeName.bind(this);
    }
    changeName(newName) {
        this.setState({name:newName});
      }
    render(){
        return(
            <Child Name={this.state.name} onChange={this.changeName} />
        )
    }
}