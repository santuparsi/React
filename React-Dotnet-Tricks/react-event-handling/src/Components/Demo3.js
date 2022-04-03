import React, { Component } from 'react'

export default class Demo3 extends Component {
    constructor(props) {
        super(props);
        
    }
    onClickHandler=(e)=>{
        console.log(e)
    }
    render() {
        return (
            <div>
                <input type='text' />
                <button onClick={(e)=>this.onClickHandler('Hello World')}>Button</button>
            </div>
        )
    }
}
