import React, { Component } from 'react';

import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';

import _ from 'lodash';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            usedNumbers:[],
            numOfStars: (Math.floor(Math.random() * 9)) + 1,
            correct: null,
            redraws: 5,
            doneStatus:null
        };
    }    

    selectNumber(num) {
        if (this.state.selectedNumbers.indexOf(num) === -1 && this.state.usedNumbers.indexOf(num) === -1) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(num) });
        }    
    }
    unSelectNumber(num) {
        let { selectedNumbers } = this.state;
        let idx = selectedNumbers.indexOf(num);
        selectedNumbers.splice(idx, 1);
        this.setState({selectedNumbers});
    }
    sumOfSelectedNumbers() {
        let { selectedNumbers } = this.state;
        return selectedNumbers.reduce(function (s, n) { 
            return s + n;
        },0);
    }
    checkAnswer() {
        let { numOfStars } = this.state;
        let correct = (numOfStars === this.sumOfSelectedNumbers());
        this.setState({correct});
    }
    acceptAnswer() {
        this.setState({
            correct: null,
            usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
            selectedNumbers: [],
            numOfStars:(Math.floor(Math.random() * 9)) + 1
        }, function () { 
              this.updateDoneStatus();
        });
      
    }
    redraw() {

        if(this.state.redraws >= 1){
            this.setState({
            selectedNumbers: [],
            correct: null,
            numOfStars: (Math.floor(Math.random() * 9)) + 1,
            redraws: this.state.redraws - 1
            }, function () { 
                this.updateDoneStatus();
            });
        }

    }

    possibleCombinationSum(arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };


    possibleSolution() {
        var numberOfStars = this.state.numberOfStars,
            possibleNumbers = [],
            usedNumbers = this.state.usedNumbers;

        for (var i = 1; i <= 9; i++) {
            if (usedNumbers.indexOf(i) < 0) {
                possibleNumbers.push(i);
            }
        }

        return this.possibleCombinationSum(possibleNumbers, numberOfStars);
    }

    updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
            this.setState({ doneStatus: 'Done. Nice!' });
            return;
        }
        if (this.state.redraws === 0 && !this.possibleSolution()) {
            this.setState({ doneStatus: 'Game Over!' });
        }
    }

    restart() {
        this.setState({
            selectedNumbers: [],
            usedNumbers:[],
            numOfStars: (Math.floor(Math.random() * 9)) + 1,
            correct: null,
            redraws: 5,
            doneStatus:null
        });
    }


    render() {
        let { selectedNumbers,usedNumbers,numOfStars,correct,redraws,doneStatus } = this.state;
        return (
            <div>
                <div className="page-header"> Play-9</div>
                <div className="clearfix">
                    <StarsFrame numOfStars={numOfStars}/>
                    <ButtonFrame checkAnswer={this.checkAnswer.bind(this)}
                        acceptAnswer={this.acceptAnswer.bind(this)} 
                        redraw={this.redraw.bind(this)}
                        redraws={redraws}
                        correct={correct} />
                    <AnswerFrame unSelectNumber={this.unSelectNumber.bind(this)}
                        selectedNumbers={selectedNumbers} />
                </div>    
                <NumbersFrame selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}
                    doneStatus={doneStatus}
                    restart={this.restart.bind(this)}
                    selectNumber={this.selectNumber.bind(this)} />
            </div>
        );
    }
}

export default Game;