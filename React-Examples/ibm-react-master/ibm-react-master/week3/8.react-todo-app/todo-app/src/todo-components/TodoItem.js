import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing:false
        }
    }

   
    handleSubmit(newText) {
        let { todo, editTodo, deleteTodo } = this.props;
        if (newText) {
            editTodo(todo.id, newText);
        } else {
            deleteTodo(todo.id);
        }    
        this.setState({ editing: false });
    }    

    render() {
        let { todo, deleteTodo, completeTodo } = this.props;
        
        let element;
        if (this.state.editing) {
            element = (<TodoTextInput text={todo.text} onSubmit={(text) => { this.handleSubmit(text) }}/>)
        } else {
            element = (
                <div className="view">
                    <input type="checkbox" className="toggle" checked={todo.completed} onChange={(e)=>{completeTodo(todo.id)}}/>
                    <label onDoubleClick={(e) => { this.setState({ editing: true }) }}> {todo.text} </label>
                    <button className="destroy" onClick={(e) => { deleteTodo(todo.id)}}></button>
                </div>
            );
        }
        return (
            <li className={classnames({completed:todo.completed})}>
                {element}
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo:PropTypes.func.isRequired
}; 

export default TodoItem;