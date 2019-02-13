import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor(){
		super();

		this.state = {
			todo: "",
			todos: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: false
				}
			]
		};

		this.addTodo = this.addTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	addTodo() {
		const todo = {
			task: this.state.todo,
			id: Date.now(),
			completed: false
		};

		this.setState({
			...this.state,
			todo: "",
			todos: [...this.state.todos, todo]
		})
	}

	completeTodo(todoId) {
		const todo = this.state.todos[this.state.todos.indexOf(this.state.todos.find(elem => elem.id === todoId))];
		todo.completed = true;
		
		this.setState({
			todos: [...this.state.todos.filter(elem => elem.id !== todo.id), todo]
		});
	}

	clearCompleted() {
		this.setState({
			todos: this.state.todos.filter(elem => !elem.completed)
		});
	};

	onChange(event) {
		this.setState({
			todo: event.target.value,
			todos: this.state.todos
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.addTodo();
	}

	render() {
		return (
			<div>
				<TodoList todos={this.state.todos.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))} completeTodo={this.completeTodo} />
				<TodoForm todo={this.state.todo} addTodo={this.addTodo} update={this.onChange} submit={this.onSubmit} />
				<button onClick={this.clearCompleted}>Clear Completed</button>
			</div>
		);
	}
}

export default App;
