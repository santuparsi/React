import React, { Component,PropTypes } from 'react';

class NumberButton extends Component {
    render() {
        let {value,onClick}=this.props;
        return (
           <button className="btn btn-primary btn-lg" 
                   onClick={(e)=>{onClick(value)}}>{value}
          </button>
        );
    }
}

NumberButton.propTypes={
    onClick:PropTypes.func.isRequired
}

export default NumberButton;