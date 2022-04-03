import React, { Component } from 'react';

class ButtonFrame extends Component {
    render() {

        let { checkAnswer,acceptAnswer,correct,redraw,redraws } = this.props;   
        let button;
        switch (correct) {
            case true:
                button = (
                    <button className="btn btn-lg btn-success" onClick={() => { acceptAnswer()}}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-lg btn-danger">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                ); 
                break;
            default:
                button = (
                    <button className="btn btn-lg btn-primary" onClick={() => { checkAnswer()}}>
                        =
                    </button>
                );    
        }
        return (
            <div id="button-frame">
                {button}

                <br/><br/>
                <button
                        className="btn btn-xs btn-warning"
                        onClick={() => {redraw()}}>
                    <span className="glyphicon glyphicon-refresh"></span>
                    &nbsp;{redraws} 
                </button>

            </div>
        );
    }
}

export default ButtonFrame;