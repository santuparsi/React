import React, { Component } from 'react';

import DoneStatus from './DoneStatus';

class NumbersFrame extends Component {
    render() {

        let numbers = [];
        let { selectNumber , selectedNumbers,usedNumbers,doneStatus,restart} = this.props;
        for (let i = 1; i <= 9; i++){
            let className = 'number selected-' + (selectedNumbers.indexOf(i) > -1);
            className+=" used-"+(usedNumbers.indexOf(i) > -1);     
            numbers.push(
                <span key={i}
                      className={className}
                      onClick={() => { selectNumber(i); }}>
                {i}
                </span>
            );
        }

        let element;

        if (doneStatus) {
            element = <DoneStatus doneStatus={doneStatus} restart={restart}/>
        } else {
            element = (
            <div id="numbers-frame" className="alert alert-danger">
                <div className="well">
                    {numbers}
                </div>
            </div>
            );
        }        

        return element;
    }
}

export default NumbersFrame;