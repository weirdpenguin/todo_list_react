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
        this.deleteTodo = this.deleteTodo.bind(this);
        this.selectTodo = this.selectTodo.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({todos: state.todos.concat(todo)}));
    }

    deleteTodo(id) {
        this.setState((state) => ({todos: state.todos.filter(todo => todo.id !== id)}));
    }

    selectTodo(id) {
        /* map */
        let todos = this.state.todos.slice();
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                let selected = Object.assign(
                    {},
                    todos[i],
                    {checked: !todos[i].checked}
                );
                todos[i] = selected;
            }
        }

        this.setState({todos: todos});
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
                    selectTodo={this.selectTodo}
                    deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default Todo;