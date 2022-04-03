import React, { Component,PropTypes } from 'react';

class TodoTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = { text:props.text || '' };
    }

    handleKeyup(e) {
        if (e.which === 13) {
            //let todoText = e.target.value;
            this.props.onSubmit(this.state.text);
            //e.target.value = '';
            this.setState({text:''});
        }
        if (e.which === 27) {
            console.log("esc key"); // H.w
        }

    }    
    handleChange(e) {
        this.setState({text:e.target.value});
    }

    handleBlur(e) {
        if (!this.props.newTodo) {
            this.props.onSubmit(e.target.value)
        }
    }

    render() {
        return (
            <input
                className="new-todo"
                autoFocus={true}    
                placeholder={this.props.placeHolder}
                value={this.state.text}
                onBlur={(e) => { this.handleBlur(e)}}
                onChange={(e) => { this.handleChange(e)}}
                onKeyUp={(e) => { this.handleKeyup(e)}}    
            />
        );
    }
}

TodoTextInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeHolder:PropTypes.string
};

export default TodoTextInput;