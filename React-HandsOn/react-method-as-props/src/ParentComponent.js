import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parent:'parent'
         }
         this.greetHandler=this.greetHandler.bind(this);
     }
     greetHandler()
     {
         alert(`Hello ${this.state.parent}`)
     }
     greet(name)
     {
         alert(`Hello ${name}`)
     }
     
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetHandler} greet={this.greet} />
            </div>
        )
    }
}

export default ParentComponent
