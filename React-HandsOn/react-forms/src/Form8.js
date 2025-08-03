import React from 'react'
class Form8 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            age:null
        };
    }
    Submit=()=>{
        alert(this.state.username+' '+this.state.age)
    }
    myChangeHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val})
        console.log(this.state.username)
        console.log(this.state.age);
    }
    render() {
        return (
          <form onSubmit={this.Submit}>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onBlur={this.myChangeHandler}
            required
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            onBlur={this.myChangeHandler}
            required
          /><br/>
          <input type="submit" />
          </form>
        );
}
}
export default Form8