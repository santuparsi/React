import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './todo-components/Header';
import MainSection from './todo-components/MainSection';
import Footer from './todo-components/Footer';

// import todosActions from './actions/todos';

import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from './constants/todo-filters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]:todo=>!todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn .js', completed: true },
        { id: 2, text: 'Learn React', completed: false },
        { id: 3, text: 'Learn ??', completed: false }
      ],
      filter:SHOW_ALL
    };
  }

  //-------------------------------------------------------------

  _addTodo(text) {
    let { todos } = this.state;
    let nextId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id) + 1, 0);
    todos = [{ id: nextId, text, completed: false }, ...todos];
    this.setState({todos});
  }
  _deleteTodo(id) {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.id !== id);
    this.setState({todos});
  }
  _completeTodo(id) {
    let { todos } = this.state;
    todos = todos.map(todo => { 
      return todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    this.setState({todos});
  }
  _completeAll() {
    let { todos } = this.state;
    let allAreMArked = todos.every(todo => todo.completed);
    todos = todos.map(todo => { 
      return Object.assign({}, todo, { completed: !allAreMArked });
    });
    this.setState({todos});
  }
  _editTodo(id,newText) {
    let { todos } = this.state;
    todos = todos.map(todo => { 
      return todo.id === id ? Object.assign({}, todo, { text: newText }) : todo;
    });
    this.setState({todos});
  }

  //-------------------------------------------------------------

  handleClearCompleted() {
        this.setState({
            todos: this.state.todos.filter(todo => todo.completed === false)
        });
    }

  handleShow(filter) {
    this.setState({filter});
  }

 renderFooter(completedCount) {
        const { todos, filter} = this.state;
        const activeCount = todos.length - completedCount

        if (todos.length) {
            return (
                <Footer
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                    onClearCompleted={this.handleClearCompleted.bind(this)}
                    onShow={this.handleShow.bind(this)} />
            )
        }
    }
   
  render() {

    let { todos,filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]); 
    const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
    
    return (
      <div className="todoapp">
        <Header addTodo={(text) => { this._addTodo(text) }}/>
        <MainSection
          todos={filteredTodos}
          deleteTodo={(id) => { this._deleteTodo(id) }}
          completeTodo={(id) => { this._completeTodo(id) }}
          completeAll={() => { this._completeAll() }}
          editTodo={(id,newText) => { this._editTodo(id,newText)}}
        />
        {this.renderFooter(completedCount)}
      </div>
    );
  }
}

export default App;
