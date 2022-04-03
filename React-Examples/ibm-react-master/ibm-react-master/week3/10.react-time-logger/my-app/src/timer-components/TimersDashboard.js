import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uuid from 'uuid';

import helpers  from '../helpers/timer-helpers';

class TimersDashboard extends Component {

     constructor(props) {
        super(props);
        this.state = {
            timers: [
                {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now(),
                }
            ]
        };
     }
    
    
    createTimer(timer) {
        const t = helpers.newTimer(timer);
        this.setState({ timers: this.state.timers.concat(t) }); // re-render
    }
    deleteTimer(timerId) {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });  
       
    }
    updateTimer(attrs) {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project:attrs.project
                    });
                } else {
                    return timer;
                }
            })
        });
    }

    startTimer(timerId) {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => { 
            if(timer.id===timerId){
                return Object.assign({}, timer, {runningSince:now});
            } else {
                return timer;
            }
            })
        });
    }
        
    stopTimer(timerId) {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => { 
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {elapsed:timer.elapsed+lastElapsed,runningSince:null});
            } else {
                return timer;
            }
            })
        });
    }


    
     handleCreateFormSubmit(timer) {
         this.createTimer(timer);
     }
    
     handleTrashClick(timerId) {
        this.deleteTimer(timerId);  
     }
     handleEditFormSubmit(attrs) {
        this.updateTimer(attrs);
     }
    
    handleStartClick (timerId) {
        this.startTimer(timerId);
    }
    handleStopClick (timerId) {
        this.stopTimer(timerId);
    }

     render() {
         let { timers } = this.state;
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={timers}
                        onSubmit={this.handleEditFormSubmit.bind(this)}
                        onTrash={this.handleTrashClick.bind(this)}
                        onStartClick={this.handleStartClick.bind(this)}
                        onStopClick={this.handleStopClick.bind(this)}
                    />
                    <ToggleableTimerForm onSubmit={this.handleCreateFormSubmit.bind(this)}/>
                </div>    
            </div>
        );
    }
}

export default TimersDashboard;