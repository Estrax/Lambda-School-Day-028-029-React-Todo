// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.todos.map(elem => <Todo todo={elem} completeTodo={this.props.completeTodo} key={elem.id} />)}
			</div>
		);
	}
}

export default TodoList;
