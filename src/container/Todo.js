import React from 'react';
import AddingForm from '../components/AddingForm';
import TodoList from '../components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleleTodo = this.deleleTodo.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({todos: state.todos.concat(todo)}));
    }

    deleleTodo(id) {
        this.setState((state) => ({todos: state.todos.filter(todo => todo.id !== id)}));
    }

    render() {
        const todos = this.state.todos;

        return (
            <div className='container'>
                <AddingForm
                    todos={todos}
                    addTodo={this.addTodo} />
                <TodoList
                    todos={todos}
                    deleleTodo={this.deleleTodo} />
            </div>
        );
    }
}

export default Todo;