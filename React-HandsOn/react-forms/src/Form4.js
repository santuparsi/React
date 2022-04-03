import React from 'react'
class Form4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={username:''};
    }
    myChangeHandler=(event)=>{
        this.setState({username:event.target.value})
    }
    Greet=()=>{
        alert('Hello '+this.state.username)
    }
    render(){
        return (
            <form>
                <label>Enter Name</label>
                <input type="text" onChange={this.myChangeHandler}></input>
                <input type="button" value="Greet" onClick={this.Greet}></input>
            </form>
        );
    }
}
export default Form4