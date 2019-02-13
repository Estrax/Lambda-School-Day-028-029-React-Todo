import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			todo: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChange(event) {
		this.setState({
			todo: event.target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ""
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
					type="text"
					name="todo"
					placeholder="...todo"
					value={this.state.todo}
					onChange={this.onChange}
				/>

				<input
					type="submit"
					value="Add Todo"
				/>
			</form>
		);
	}
}

export default TodoForm;
