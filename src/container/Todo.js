import React from 'react';
import AddingForm from '../components/AddingForm';
import TodoList from '../components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            checkAllTodos: false,
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.selectTodo = this.selectTodo.bind(this);
        this.selectAllTodos = this.selectAllTodos.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({todos: state.todos.concat(todo)}));
    }

    deleteTodo(id) {
        this.setState((state) => ({todos: state.todos.filter((todo) => todo.id !== id)}));
    }

    selectTodo(id) {
        this.setState((state) => ({
            todos: state.todos.map(
                (todo) => {
                    if (todo.id === id) {
                        let selected = Object.assign(
                            {},
                            todo,
                            {checked: !todo.checked}
                        );
                        return selected;
                    }
                    return todo;
                }
            )
        }));
    }

    selectAllTodos() {
        let todos = this.state.todos.slice();

        this.setState((state) => ({
            checkAllTodos: !state.checkAllTodos
        }));

        this.setState((state) => ({
            todos: todos.map(
                (todo) => {
                    let selectAll = Object.assign(
                        {},
                        todo,
                        {checked: state.checkAllTodos}
                    );
                    return selectAll;
                }
            )
        }));
    }

    render() {
        const todos = this.state.todos;

        return (
            <div className='container'>
                <AddingForm
                    todos={todos}
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={todos}
                    checkAllTodos={this.checkAllTodos}
                    selectTodo={this.selectTodo}
                    selectAllTodos={this.selectAllTodos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default Todo;