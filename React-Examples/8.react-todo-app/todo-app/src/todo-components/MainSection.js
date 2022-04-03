import React, { Component,PropTypes } from 'react';

import TodoItem from './TodoItem';
// import Footer from './Footer';

class MainSection extends Component {


    
    render() {

        let { todos,deleteTodo,completeTodo,completeAll,editTodo} = this.props;       
        
        let todoComps = todos.map((todo,idx) => { 
            return <TodoItem key={idx}
                             todo={todo}
                             deleteTodo={deleteTodo}
                             editTodo={editTodo}
                             completeTodo={completeTodo} />
        });

        return (
            <section className="main">
                <input type="checkbox"
                       className="toggle-all"
                        />
                <label onClick={completeAll}>complete all</label>
                <ul className="todo-list">
                   {todoComps}
                </ul>
            </section>
        );
    }
}



MainSection.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    completeAll: PropTypes.func.isRequired,
    editTodo : PropTypes.func.isRequired
};

export default MainSection;