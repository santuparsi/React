import React,{Component} from 'react';
export class NameForm extends Component
{   
    constructor(props)
    {
        super(props);
        this.state={value:''};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event)
    {
        alert("Hello "+this.state.value);
        event.preventDefault;
    }

    render()
    {
        return(
<form onSubmit={this.handleSubmit}>
    <label htmlFor="Name:">
        <input type="" name="" id="" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
</form>
        );
    }
}
