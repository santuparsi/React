import React, { Component } from 'react'

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    changeHandler=(event)=>{
        console.log(event.target.value); //retunr event targer value i.e textbox value
        this.setState({
          name:event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    Enter Name: <input type='text' onChange={this.changeHandler}  value={this.state.name}/>
                    <h1>Hello {this.state.name}</h1>
                 
                </form>
            </div>
        )
    }
}
