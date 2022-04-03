

// Model
class Todo{
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }
}

//--------------------------------
let todos = [
    new Todo(1,'test')
];
//--------------------------------

// Service

class TodoService{
    addTodo(title) {
        let nextId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id) + 1, -1);
        let newTodo = new Todo(nextId, title);
        todos = [...todos,newTodo];
    }
    deleteTodo(id) {
        todos=todos.filter(todo=>todo.id!==id)
    }
    editTodo(id, newTitle) {
        todos = todos.map(todo => 
             todo.id === id ? Object.assign({}, todo, { title: newTitle }) : todo
        );
    }
    completeTodo(id) {
        
    }
    display() {
        todos.forEach(todo=>console.log(todo));
    }
}

// -------------------------------------------------------

let service = new TodoService();
service.addTodo('party');
service.addTodo('go home');

service.deleteTodo(3);

service.display();


