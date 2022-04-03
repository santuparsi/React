import React from 'react'
class Form3 extends React.Component
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
        let header=''
        if(this.state.username)
        {
        header=<h1>Hello,{this.state.username}</h1>
        }
        else
        {
            header='';
        }
        return (
            <form>
                {header}
                <label>Enter Name</label>
                <input type="text" onChange={this.myChangeHandler}></input><br />
            </form>
        );
    }
}
export default Form3