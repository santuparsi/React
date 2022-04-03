import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
    }

    handleSubmit(timer) {
        this.props.onSubmit(timer);
        this.setState({isOpen:false});
    }
    handleCancel() {
        this.setState({isOpen:false});
    }

    render() {

        if (this.state.isOpen) {
            return (<TimerForm onFormSubmit={this.handleSubmit.bind(this)}
                               onCancel={this.handleCancel.bind(this)} />);
        } else {
            return (
                <div className="ui basic content aligned segment">
                    <button className="ui basic button icon" onClick={() => this.setState({isOpen:true})}>
                        <i className="plus icon"></i>
                    </button>
                </div>
            );
        }    
    }
}

export default ToggleableTimerForm;