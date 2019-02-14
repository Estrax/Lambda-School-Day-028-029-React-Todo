import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			todo: "",
			todos: this.fetchTodos(),
			search: ""
		};

		this.encode = this.encode.bind(this);
		this.decode = this.decode.bind(this);
		this.localStorageSave = this.localStorageSave.bind(this);
		this.localStorageFetch = this.localStorageFetch.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.onFormChange = this.onFormChange.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.findTodos = this.findTodos.bind(this);
		this.findNotCompleted = this.findNotCompleted.bind(this);
		this.fetchTodos = this.fetchTodos.bind(this);
	}

	fetchTodos(){
		const todos = this.decode(this.localStorageFetch());
		if(todos.length === 0) return [];
		return todos;
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

	onFormChange(event) {
		this.setState({
			...this.state,
			todo: event.target.value,
			todos: this.state.todos
		});
	}

	onSearchChange(event) {
		this.setState({
			...this.state,
			search: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.addTodo();
	}

	findTodos(phrase) {
		if(phrase === "") return this.state.todos;

		return this.state.todos.filter(elem => elem.task.includes(phrase));
	}

	findNotCompleted() {
		return this.state.todos.filter(elem => !elem.completed);
	}

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<h3>{`You have ${this.state.todos.length} ${this.state.todos.length === 1 ? "task" : "tasks"} on the todo list.`}</h3>
				<h3>{`${this.findNotCompleted().length > 0 ? `Still a lot to do. Keep working on the ${this.findNotCompleted().length} ${this.findNotCompleted().length === 1 ? "task" : "tasks"} remaining!` : this.findTodos("").length > 0 ? "All of them completed." : ""}`}</h3>
				<input 
					type="text"
					name="search"
					placeholder="find your todos..."
					value={this.state.search}
					onChange={this.onSearchChange}
				/>
				{
					this.state.search !== "" ?
					<h3>Found {this.findTodos(this.state.search).length} {this.findTodos(this.state.search).length === 1 ? "todo" : "todos"}.</h3>
					: ""
				}
				<TodoList todos={this.findTodos(this.state.search).sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))} completeTodo={this.completeTodo} />
				<TodoForm todo={this.state.todo} addTodo={this.addTodo} update={this.onFormChange} submit={this.onFormSubmit} />
				<button onClick={this.clearCompleted}>Clear Completed</button>
			</div>
		);
	}
}

export default App;
