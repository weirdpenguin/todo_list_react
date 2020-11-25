import React from 'react';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const todosList = todos.map((todo) =>
            <li key={todo.id.toString()}>
                <input
                    type='checkbox'
                    checked={todo.checked}
                    onChange={() => this.props.selectTodo(todo.id)}
                />
                {todo.text}
                <button
                    onClick={() => this.props.deleteTodo(todo.id)}>
                        <i className='fas fa-eraser'></i>
                </button>
            </li>
        );

        return (
            <div>
                <input
                    type='checkbox'
                    className='fas fa-carrot'
                    onClick={this.props.selectAllTodos}
                />
                <ul>{todosList}</ul>
            </div>
        );
    }
}

export default TodoList;