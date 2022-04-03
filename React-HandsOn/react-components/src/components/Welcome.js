import React,{Component} from 'react'
export class Weclome extends Component
{
    render()
    {
    return <h1>Hello {this.props.name} your age is {this.props.age}</h1>
    }
}