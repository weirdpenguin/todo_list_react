import React from 'react';
import AddingForm from '../components/AddingForm';
import TodoList from '../components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            checkedAllTodos: false,
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        this.checkAllTodos = this.checkAllTodos.bind(this);
        this.deleteCheckedTodos = this.deleteCheckedTodos.bind(this);
        this.checkTodosStatus = this.checkTodosStatus.bind(this);
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
        // проверка: если все (todo.checked === true) => менять checkedAllTodos на true
        // + проверка: убирать true с checkedAllTodos при снятии галочки
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
        this.checkTodosStatus();
        console.log(this.state.checkedAllTodos);
    }

    checkTodosStatus() {
        this.setState((state) => ({
            checkedAllTodos: state.todos.every(todo => todo.checked === true)
        }));
    }

    checkAllTodos() {
        // this.setState({ todos: [] });
        
        // let todos = this.state.todos.slice();

        // this.setState((state) => ({
            // checkedAllTodos: !state.checkedAllTodos,
        //     todos: todos.map(
        //         (todo) => {
        //             let checkAll = Object.assign(
        //                 {},
        //                 todo,
        //                 {checked: !state.checkedAllTodos}
        //             );
        //             return checkAll;
        //         }
        //     )
        // }));
        this.setState(function(state) {
            let todos = state.todos.slice();

            return ({
                checkedAllTodos: !state.checkedAllTodos,
                todos: todos.map(
                    (todo) => {
                        let checkAll = Object.assign(
                            {},
                            todo,
                            {checked: !state.checkedAllTodos}
                        );
                        return checkAll;
                    }
                )

            });
        });
        // console.log(this.state.checkedAllTodos);
        console.log(this.state.todos);
    }

    deleteCheckedTodos() {
        this.setState((state) => ({
            todos: state.todos.filter((todo) => !todo.checked)
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
                    checkAllTodos={this.state.checkedAllTodos}
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