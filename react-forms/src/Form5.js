import React from 'react'
class Form5 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={uname:''}
    }
    myChangeHandler=(event)=>{
        this.setState({uname:event.target.value})
    }
    mySubmitHandler=(event)=>{
       event.preventDefault();
        alert("Hello "+this.state.uname)
    }
    render()
    {
        return(
            <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.uname}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
        );
    }
}
export default Form5;