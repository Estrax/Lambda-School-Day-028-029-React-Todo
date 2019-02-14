import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<ul>
			{props.todos.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).map(elem => <li key={elem.id}><Todo todo={elem} completeTodo={props.completeTodo} key={elem.id-Date.parse('2019-01-01')}/></li>)}
		</ul>
	);
}

export default TodoList;
