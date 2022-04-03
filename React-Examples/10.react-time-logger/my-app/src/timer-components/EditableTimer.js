import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';


class EditableTimer extends Component {

     constructor(props) {
        super(props);
        this.state = {
            editFormOpen:false
        };
     }
    
     handleSubmit(timer) {
         this.props.onSubmit(timer);
         this.setState({editFormOpen:false});
     }

    render() {

        let { editFormOpen } = this.state;

        if (editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit.bind(this)}
                    onCancel={() => { this.setState({editFormOpen:false})}}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onTrash={this.props.onTrash}
                    onEdit={() => { this.setState({ editFormOpen: true }) }}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            );
        }    
    }
}

export default EditableTimer;