import React from 'react';

const TodoForm = props => {
	return (
		<form onSubmit={props.submit}>
			<input 
				type="text"
				name="todo"
				placeholder="...todo"
				value={props.todo}
				onChange={props.update}
			/>

			<input
				type="submit"
				value="Add Todo"
			/>
		</form>
	);
}

export default TodoForm;
