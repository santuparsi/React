import React, { Component } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state={
            num:"0"
        };
    }

    placeNewNum(newNum){
        this.setState({num:this.state.num+newNum});
    }

    render() {
        let nums=[0,1,2,3,4,5,6,7,8,9];
        let numButtons=nums.map((n,idx)=>{
            return <NumberButton onClick={(newNum)=>{this.placeNewNum(newNum)}} value={n} key={idx}/>
        });
        let {num}=this.state;
        return (
            <div>
                <Display num={num}/>
                <div className="col-md-2 col-sm-3 col-xs-4">
                {numButtons}
                </div>
            </div>
        );
    }
}

export default Calculator;