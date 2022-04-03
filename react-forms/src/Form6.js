import React from 'react'
class Form6 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            age:null
        };
    }
    myChangeHandler1=(event)=>{
        this.setState({username:event.target.value})
    }
    myChangeHandler2=(event)=>{
        this.setState({age:event.target.value})
    }
    render() {
        return (
          <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler1}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler2}
          />
          </form>
        );
}
}
export default Form6