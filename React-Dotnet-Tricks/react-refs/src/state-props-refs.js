import React, { Component } from 'react';
const rootComponenet=()=>{
    let book={title:'Cookbook React',author:'Santhosh'}
    return <Article title={book.title} author={book.author}></Article>
}
class Article extends Component {
    constructor(props) {
   super(props);
   this.state={
       counter:0
   }
    }
    handleClick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    //updating the state multiple times.
    handleClick1=()=>{
        //update only one time
        // this.setState({
        //     counter:this.state.counter+1
        // })
        // this.setState({
        //     counter:this.state.counter+1
        // })
        //update 2 times
        this.setState((prevState,props)=>({
            counter:prevState.counter+1
        }));
        this.setState((prevState,props)=>({
            counter:prevState.counter+1
        }));
    } //state updated asynchronusly
    render() {
        return (
            <div>
                <h1>Props</h1>
                <h4>{this.props.title}</h4>
                <h4>{this.props.author}</h4>
                <h1>State</h1>
                <p>Counter:{this.state.counter}</p>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.handleClick1}>Click</button>
            </div>
        );
    }
}

export default rootComponenet