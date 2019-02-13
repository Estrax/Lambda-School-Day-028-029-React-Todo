import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			todo: "",
			todos: this.decode(this.localStorageFetch()) || []
		};

		this.addTodo = this.addTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	encode(todos) {
		return JSON.stringify(todos);
	}

	decode(str) {
		return JSON.parse(str);
	}

	localStorageSave(str) {
		localStorage.setItem('todos', str);
	}

	localStorageFetch() {
		return localStorage.getItem('todos');
	}

	addTodo() {
		const todo = {
			task: this.state.todo,
			id: Date.now(),
			completed: false
		};

		this.localStorageSave(this.encode([...this.state.todos, todo]));

		return this.setState({
			...this.state,
			todo: "",
			todos: this.decode(this.localStorageFetch())
		});
	}

	completeTodo(todoId) {
		const todo = this.state.todos[this.state.todos.indexOf(this.state.todos.find(elem => elem.id === todoId))];
		todo.completed = true;
		
		this.localStorageSave(this.encode([...this.state.todos.filter(elem => elem.id !== todo.id), todo]));

		this.setState({
			...this.state,
			todos: this.decode(this.localStorageFetch())
		});
	}

	clearCompleted() {
		this.localStorageSave(this.encode(this.state.todos.filter(elem => !elem.completed)));

		this.setState({
			...this.state,
			todos: this.decode(this.localStorageFetch())
		});
	};

	onChange(event) {
		this.setState({
			...this.state,
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
				<h1>Todo List</h1>
				<h3>You have {this.state.todos.length} {this.state.todos.length === 1 ? "task" : "tasks"} on the todo list. {this.state.todos.filter(elem => !elem.completed).length > 0 ? `Still a lot to do. Keep working on the ${this.state.todos.filter(elem => !elem.completed).length} ${this.state.todos.length === 1 ? "task" : "tasks"} remaining!`: ""}</h3>
				<TodoList todos={this.state.todos.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))} completeTodo={this.completeTodo} />
				<TodoForm todo={this.state.todo} addTodo={this.addTodo} update={this.onChange} submit={this.onSubmit} />
				<button onClick={this.clearCompleted}>Clear Completed</button>
			</div>
		);
	}
}

export default App;
