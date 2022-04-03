import React from 'react'
class Form7 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            age:null
        };
    }
    myChangeHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val})
        console.log(this.state.username);
        console.log(this.state.age);
    }
    render() {
        return (
          <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          </form>
        );
}
}
export default Form7