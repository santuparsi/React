import React, { Component } from 'react';

class DoneStatus extends Component {
    render() {
        let { doneStatus,restart } = this.props;
        return (
            <div>
                {doneStatus}
                <hr />
                <button className="btn btn-primary" onClick={() => { restart()}}>
                    play again
                </button>
            </div>
        );
    }
}

export default DoneStatus;