import React from 'react'
class Form2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={username:''};
    }
    myChangeHandler=(event)=>{
        this.setState({username:event.target.value})
    }
    render(){
        return (
            <form>
                <label>Enter Name</label>
                <input type="text" onChange={this.myChangeHandler}></input>
        <h1>Hello {this.state.username}</h1>
            </form>
        );
    }
}
export default Form2