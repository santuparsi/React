import React, { Component } from 'react'

export default class Demo2 extends Component {
    constructor(props) {
        super(props)
        this.uname=React.createRef();
        this.pswd=React.createRef();
        
    }
    handleSubmit=event=>{
        let un=this.uname.current.value;
        let pwd=this.pswd.current.value;
       console.log(un+' '+pwd);
       
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type="text" ref={this.uname} />
            </label>
            <label>
                Password:
                <input type="password" ref={this.pswd} />
            </label>
            <input type='submit' value='Submit' />
            </form>
        </div>
        )
    }
}
