import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.todos.map(elem => <Todo todo={elem} completeTodo={props.completeTodo} key={elem.id} />)}
		</div>
	);
}

export default TodoList;
