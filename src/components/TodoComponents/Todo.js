import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<li className={props.todo.completed? "completed" : ""} key={props.todo.id} onClick={() => props.completeTodo(props.todo.id)}>
			<p>
				{props.todo.task}
			</p>
		</li>
	);
}

export default Todo;
