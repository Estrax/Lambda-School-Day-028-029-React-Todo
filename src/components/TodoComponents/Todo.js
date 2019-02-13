import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<p className={props.todo.completed? "completed" : ""} onClick={() => props.completeTodo(props.todo.id)}>{props.todo.task}</p>
	);
}

export default Todo;
