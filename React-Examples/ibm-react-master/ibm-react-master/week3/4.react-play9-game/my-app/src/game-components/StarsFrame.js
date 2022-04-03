import React, { Component } from 'react';

class StarsFrame extends Component {
    render() {
       
        let stars = [];
        let { numOfStars } = this.props;
        for (let i = 1; i <= numOfStars; i++){
            stars.push(<span key={i} className="glyphicon glyphicon-star"></span>);
        }
        return (
            <div id="stars-frame" className="alert alert-danger">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
}

export default StarsFrame;