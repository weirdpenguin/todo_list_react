import React from 'react';
import styles from './TodoList.module.css'

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const todosList = todos.map((todo) =>
            <tr
                className={todo.checked ? styles['checked_todo'] : styles['todo']}
                key={todo.id.toString()}
            >
                <td>
                    <input
                        type='checkbox'
                        id={'id-' + todo.id}
                        className={styles['hidden']}
                        checked={todo.checked}
                        onChange={() => this.props.checkTodo(todo.id)}
                    />
                    <label
                        htmlFor={'id-' + todo.id}
                        className={styles['todo_checkbox_label']}
                    ></label>
                </td>
                <td className={styles['todo_text']}>
                    {todo.text}
                </td>
                <td>
                    <button
                        className={styles['btn_delete_todo']}
                        onClick={() => this.props.deleteTodo(todo.id)}
                    >
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
                                id='allTodoCheck'
                                className={styles['hidden']}
                                type='checkbox'
                                checked={this.props.checkAllTodos}
                                onChange={this.props.checkAllTodosF}
                            />
                            <label
                                htmlFor='allTodoCheck'
                                className={todos.length > 0 ?
                                    styles['all_todo_check'] :
                                    styles['hidden']}
                            ></label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {todosList}
                    <tr>
                        <td>
                            <button
                                className={todos.some(todo => todo.checked) ?
                                    styles['btn_delete_all_todos'] :
                                    styles['btn_delete_all_todos_hidden']}
                                onClick={this.props.deleteCheckedTodos}
                            >
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