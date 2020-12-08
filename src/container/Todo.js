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
        this.checkTodo = this.checkTodo.bind(this);
        this.checkAllTodos = this.checkAllTodos.bind(this);
        this.deleteCheckedTodos = this.deleteCheckedTodos.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({todos: state.todos.concat(todo)}));
    }

    deleteTodo(id) {
        this.setState((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }));
    }

    checkTodo(id) {
        this.setState((state) => ({
            todos: state.todos.map(
                (todo) => {
                    if (todo.id === id) {
                        let checked = Object.assign(
                            {},
                            todo,
                            {checked: !todo.checked}
                        );
                        return checked;
                    }
                    return todo;
                }
            )
        }));
    }

    checkAllTodos(checked) {
        this.setState(function(state) {
            let todos = state.todos.slice();

            return ({
                todos: todos.map(
                    (todo) => {
                        let checkAll = Object.assign(
                            {},
                            todo,
                            {checked: checked}
                        );
                        return checkAll;
                    }
                )

            });
        });
        console.log(checked);
    }

    deleteCheckedTodos() {
        this.setState((state) => ({
            todos: state.todos.filter((todo) => !todo.checked)
        }));
    }

    componentDidUpdate() {
        const { todos } = this.state;
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    componentDidMount() {
        // TODO: добавить проверку на пустое значение storage
        const todos = JSON.parse(localStorage.getItem('todos'));
        this.setState({ todos });
    }


    render() {
        console.log(this.componentDidMount);
        console.log(this.componentDidUpdate);
        const todos = this.state.todos;

        return (
            <div className='container'>
                <AddingForm
                    todos={todos}
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={todos}
                    checkTodo={this.checkTodo}
                    deleteTodo={this.deleteTodo}
                    checkAllTodosF={this.checkAllTodos}
                    deleteCheckedTodos={this.deleteCheckedTodos}
                />
            </div>
        );
    }
}

export default Todo;