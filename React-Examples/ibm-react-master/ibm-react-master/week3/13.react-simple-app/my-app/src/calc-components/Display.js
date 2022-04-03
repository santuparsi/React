import React, { Component } from 'react';

class Display extends Component {
    render() {
        let {num}=this.props;
        return (
            <div>
                <input className="input-lg" readOnly={true} value={num}/>
            </div>
        );
    }
}

export default Display;