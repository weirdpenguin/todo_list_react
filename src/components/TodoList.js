import React from 'react';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const todosList = todos.map((todo) =>
            <li key={todo.id.toString()}>
                <input
                    type='checkbox'
                    checked={todo.checked}
                    onChange={(event) => this.props.selectTodo(todo.id)}
                />
                {todo.text}
                <button
                    onClick={(event) => this.props.deleteTodo(todo.id)}>
                        <i className='fas fa-eraser'></i>
                </button>
            </li>
        );

        return (
            <ul>{todosList}</ul>
        );
    }
}

export default TodoList;