import React, { Component } from 'react';

class Story extends Component {
    render() {
        let { story,deleteStory } = this.props;
        return (
            <div className="row">
                <div className="col-md-6">
                     Name: <span> {story.name} </span>
                    <p>{story.comment}</p>
                </div> 
                <div className="col-md-3">
                    <button><span className="glyphicon glyphicon-edit"></span></button>
                    <button onClick={() => { deleteStory(story.id)}}><span className="glyphicon glyphicon-trash"></span></button>
                </div>
            </div>
        );
    }
}

export default Story;