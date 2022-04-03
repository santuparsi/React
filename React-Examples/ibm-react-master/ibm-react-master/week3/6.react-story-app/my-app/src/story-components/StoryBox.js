import React, { Component } from 'react';

import StoryForm from './StoryForm';
import Story from './Story';
import _ from 'lodash';

class StoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [
                {id:1,name: 'A', comment: 'story 1' },
                {id:2,name:'B',comment :'story-2'}
            ]
        };
    }

    addNewStory(story) {
        this.setState({stories:this.state.stories.concat(story)});
    }
    deleteStory(id) {
        let { stories } = this.state;
        _.remove(stories, function (story) { 
            return story.id === id;
        })
        this.setState({stories});
    }

    render() {

        let { stories } = this.state;
        
        let storyComps = stories.map((story, idx) => { 
            return (<Story story={story} key={idx} deleteStory={this.deleteStory.bind(this)}/>)
        });

        return (
            <div>
                <div className="row">
                    <StoryForm submitHandler={this.addNewStory.bind(this)}/>
                </div>
                <hr/>
                <div className="row">
                    {storyComps}
                </div>
            </div>
        );
    }
}

export default StoryBox;