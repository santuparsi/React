import React, { Component } from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props)
        this.input=React.createRef();
    
        this.state = {
            uname:''
        }
    }
    handleSubmit=(event)=>{
        let un=this.input.current.value;
        console.log(un)
        // this.setState({
        //     uname:un
        // })
        alert('Hello '+un);
        // console.log(this.state.uname);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input} />
                </label>
                <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default Demo1;