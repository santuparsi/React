import React, { Component } from 'react'

export default class LoggInButton extends Component {
    handelClick(){
        console.log('you clicked.',this)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.handelClick()}>
                    Click Me
                </button>
            </div>
        )
    }
}
