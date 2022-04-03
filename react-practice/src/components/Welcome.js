import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        const {name,age}=this.props //Destructuring props
        //const {state1,state2}=this.state //Destructuring state
        return (
            <div>
                {/* <h1>Hello {this.props.name} your age is {this.props.age}</h1> */}
                <h1>Hello {name} your age is {age}</h1>
            </div>
        )
    }
}

export default Welcome
