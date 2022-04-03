import React, { Component } from 'react'

export class LogOutButton extends Component {
    handleClick=()=>{
    console.log('You Clicked ',this)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} >
                    Click Me
                </button>
            </div>
        )
    }
}

export default LogOutButton
