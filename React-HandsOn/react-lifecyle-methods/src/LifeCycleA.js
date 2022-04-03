import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Santhosh Parsi'
         }
         console.log('LifeCycleA Constructor')
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log('LifeCycleA getDerivedStateFromProps')
         return null;
     }
     shouldComponentUpdate()
     {
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
     }
     getSnapshotBeforeUpdate()
     {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null;
     }
     componentDidUpdate()
     {
        console.log('LifeCycleA componentDidUpdate')
     }
     componentDidMount()
     {
        console.log('LifeCycleA componentDidMount')
     }
     handleChangeState=()=>{
         this.setState({
             name:'Santu'
         })
     }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                LifeCycleA
                <button onClick={this.handleChangeState}>ChangeSate</button>
                <LifeCycleB />
            </div>
       
        )
    }
}

export default LifeCycleA
