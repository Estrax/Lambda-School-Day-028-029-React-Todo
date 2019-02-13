import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<ul>
			{props.todos.map(elem => <li key={elem.id}><Todo todo={elem} completeTodo={props.completeTodo} /></li>)}
		</ul>
	);
}

export default TodoList;
