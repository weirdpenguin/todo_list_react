import React from 'react';
import styles from './TodoList.module.css'

class TodoList extends React.Component {
    render() {
        console.log(styles);
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
                            {/* <label htmlFor='checkAllTodos'>🦖</label> */}
                            <input
                                id='allTodoCheck'
                                className={styles['hidden']}
                                type='checkbox'
                                checked={this.props.checkedAllTodos}
                                onChange={this.props.checkAllTodosF}
                            />
                            <label
                                htmlFor='allTodoCheck'
                                className={styles['all_todo_check']}
                            ></label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {todosList}
                    <tr>
                        <td>
                            <button
                                /* className={todo.checked ? styles['btn_delete_all_todo'] : styles['hidden']} */
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