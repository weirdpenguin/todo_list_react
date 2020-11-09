import React from 'react';
import TodoItem from '../models/TodoItem';

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
        this.props.addTodo(new TodoItem(this.state.todoInputValue));
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
                    onChange={this.handleChange} />
                <button>DO IT</button>
            </form>
        );
    }
}

export default AddingForm;