import React, { Component } from 'react';
// import uuid from 'uuid';
import helpers from '../helpers/timer-helpers';

import TimerActionButton from './TimerActionButton';

class Timer extends Component {

    componentDidMount() {
        this._intervalId=setInterval(() => { 
            this.forceUpdate();
        }, 500);
        console.log('Timer:: componentDidMount');
    }

    componentWillUnmount() {
        clearInterval(this._intervalId);
        console.log('Timer:: componentWillUnmount');
    }

    render() {
        var elapsedString = helpers.renderElapsedString(this.props.elapsed,this.props.runningSince);
        return (
            <div className="ui centered card">
              <div className="content">  
                <div className="header">
                   {this.props.title}
                </div> 
                <div className="meta">
                    {this.props.project}
                </div> 
                <div className="center aligned description">
                    <h2>{elapsedString}</h2>
                </div>
                <div className="extra content" onClick={this.props.onEdit}>
                        <span className="right floated edit icon">
                        <i className="edit icon"></i>
                    </span>     
                </div> 
                <div className="extra content" onClick={()=> {this.props.onTrash(this.props.id)}}>
                        <span className="right floated trash icon">
                        <i className="trash icon"></i>
                    </span>     
                </div> 
              </div> 
              <TimerActionButton
                timerIsRunning={!!this.props.runningSince}   
                onStartClick={() => { this.props.onStartClick(this.props.id)}}
                onStopClick={() => { this.props.onStopClick(this.props.id)}}
                />        
            </div>      
        );
    }
}

export default Timer;