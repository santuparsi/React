import React, { Component,PropTypes } from 'react';

import TodoTextInput from './TodoTextInput'

class Header extends Component {

    handleSubmit(text) {
        if (text) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header>
                <h1>todos</h1>
                <TodoTextInput
                    newTodo={true}
                    placeHolder={"What needs to be dome?"}
                    onSubmit={(text) => { this.handleSubmit(text) }} />
            </header>
        );
    }
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default Header;