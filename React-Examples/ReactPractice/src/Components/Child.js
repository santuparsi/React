import React,{Component} from 'react';
export class Child extends Component
{
    constructor(props)
    {
        super(props);
        this.changeHandler=this.changeHandler.bind(this);
    }
    changeHandler(e)
        {
            const val=e.target.value;
            this.props.onChange(val)
        }
    render()
    {
       
        return(
            <div>
                <h1>Hi {this.props.Name}</h1>
                <select onChange={this.changeHandler}>
                    <option value="Sachin">Sachin</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Dhoni">Dhoni</option>
                    <option value="Virat">Virat</option>
                </select>
            </div>
        );
    }
}