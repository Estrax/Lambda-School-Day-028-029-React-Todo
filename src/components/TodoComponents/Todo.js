import React, { Component } from 'react';

class Todo extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<p onClick={() => this.props.completeTodo(this.props.todo.id)}>{this.props.todo.task}</p>
		);
	}
}

export default Todo;
