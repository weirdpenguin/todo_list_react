import React from 'react';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const todosList = todos.map((todo) =>
            <tr key={todo.id.toString()}>
                <td>
                    <input
                        type='checkbox'
                        checked={todo.checked}
                        onChange={() => this.props.checkTodo(todo.id)}
                    />
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    <button
                        onClick={() => this.props.deleteTodo(todo.id)}>
                            <i className='fas fa-eraser'></i>
                    </button>
                </td>
            </tr>
        );

        return (
            <table>
                <thead>
                    <tr>
                        <td>
                            <input
                                className='fas fa-carrot'       //!
                                type='checkbox'
                                checked={this.props.checkedAllTodos}
                                onChange={this.props.checkAllTodosF}
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {todosList}
                    <tr>
                        <td>
                            <button
                                onClick={this.props.deleteCheckedTodos}>
                                    <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default TodoList;