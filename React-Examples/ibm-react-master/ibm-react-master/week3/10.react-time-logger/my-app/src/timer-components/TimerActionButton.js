import React, { Component } from 'react';

class TimerActionButton extends Component {
    render() {
        if (this.props.timerIsRunning) {
            return (
                <div className="ui botton attached red basic button"
                    onClick={this.props.onStopClick}>
                    Stop
                </div>
            );
        } else {
            return (
                <div className="ui botton attached green basic button"
                     onClick={this.props.onStartClick}>
                    Start
                </div>
            );
        }
    }
}


export default TimerActionButton;