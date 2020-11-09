import React from 'react';

class TodoList extends React.Component {

    render() {
        const todos = this.props.todos;

        const todosList = todos.map((todo) =>
            <li key={todo.id.toString()}>
                {todo.text}
                <button
                    onClick={(event) => this.props.deleteTodo(todo.id)}>
                    <i className='fas fa-eraser'></i>
                </button>
            </li>
        )

        return ( 
            <ul>{todosList}</ul>
        );
    }
}

export default TodoList;