import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        
    }
    //It is a hook,in invokes when page load
    componentDidMount()
    {
        this.refs.name.focus();
    }
    render() {
        return (
            <div>
                <input type='text' ref='name'></input>
            </div>
        );
    }
}

export default Demo;