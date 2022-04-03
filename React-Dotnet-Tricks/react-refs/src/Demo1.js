import React, { Component } from 'react';

class Demo1 extends Component {
   count=0;
    constructor() {
        super();
this.state={
    counter:0
}
    }
  
handleClick=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}
handleSimpleClick=()=>{
this.count=this.count+1;
this.forceUpdate();//re-render the component force-fully
}
    render() {
        return (
            <div>
                <h3>Counter:{this.state.counter}</h3>
                <button onClick={this.handleClick}>Click</button>
                <h3>Count:{this.count}</h3>
                <button onClick={this.handleSimpleClick}>Simple Click</button>
            </div>
        );
    }
}

export default Demo1;