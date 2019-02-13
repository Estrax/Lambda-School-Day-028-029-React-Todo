import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<p className={this.props.todo.completed? "completed" : ""} onClick={() => this.props.completeTodo(this.props.todo.id)}>{this.props.todo.task}</p>
		);
	}
}

export default Todo;
