import React, { Component } from 'react';

class StoryForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        let nameRef = this.refs.name;
        let commentRef = this.refs.comment;

        let story = {
            id:Math.floor(Math.random()*1000),
            name: nameRef.value,
            comment:commentRef.value
        }
        this.props.submitHandler(story);
        nameRef.value = '';
        commentRef.value = '';
    }

    render() {
        return (
            <div className="col-md-offset-3 col-md-6">
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" id="name" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Comment:</label>
                        <textarea className="form-control" id="comment" ref="comment"></textarea>
                    </div>
                    <button className="btn btn-primary">submit</button>
                </form>

            </div>
        );
    }
}

export default StoryForm;