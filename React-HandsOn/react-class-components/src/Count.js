import React from "react";
class Count extends React.Component {
    constructor() {
        super(); //calling parent constructor
        this.state = { Count: 1 } //manage state
    }
    increment = () => {
        //alert('Hello Learners!!');
        //change state values
        this.setState({
            Count: this.state.Count + 1
        })
    }
    render() {
        return (
            <>
                <h4>Count:{this.state.Count}</h4>
                <button onClick={this.increment}>Increment</button>
            </>

        )
    }
}
export default Count;