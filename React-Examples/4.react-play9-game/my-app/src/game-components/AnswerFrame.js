import React, { Component } from 'react';

class AnswerFrame extends Component {
    render() {
        
        let { selectedNumbers ,unSelectNumber} = this.props;

        let numbers = selectedNumbers.map((number, i) => {
            return (
                <span key={i} className="number" onClick={() => { unSelectNumber(number)}}>
                    {number}
                </span>
            )
        });

        return (
            <div id="answer-frame" className="alert alert-danger">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}

export default AnswerFrame;