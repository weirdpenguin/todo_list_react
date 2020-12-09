import React from 'react';
import TodoItem from '../models/TodoItem';
import styles from './AddingForm.module.css'

class AddingForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoInputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({todoInputValue: event.target.value});
    }

    handleSubmit(event) {
        this.props.addTodo(new TodoItem(this.state.todoInputValue.trim()));
        this.setState({todoInputValue: ''});
        event.preventDefault();
    }

    render() {
        const todoInputValue = this.state.todoInputValue;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={todoInputValue}
                    placeholder='What needs to be done?'
                    className={styles['input_form']}
                    onChange={this.handleChange} />
                <button
                    className={styles['btn_submit']}
                ><i className='far fa-paper-plane'></i></button>
            </form>
        );
    }
}

export default AddingForm;