import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
         this.state = {
              name:'Santhosh Parsi'
         }
         console.log('LifeCycleB Constructor')
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log('LifeCycleB getDerivedStateFromProps')
         return null;
     }
     shouldComponentUpdate()
     {
        console.log('LifeCycleB shouldComponentUpdate')
        return true;
     }
     getSnapshotBeforeUpdate()
     {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null;
     }
     componentDidUpdate()
     {
        console.log('LifeCycleB componentDidUpdate')
     }
     componentDidMount()
     {
        console.log('LifeCycleB componentDidMount')
     }
     
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
