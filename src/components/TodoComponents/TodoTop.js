import React from 'react';

const TodoTop = props => {
	return (
        <div>
            <h1>Todo List</h1>
            <h3>{`You have ${props.todosCount} ${props.todosCount === 1 ? "task" : "tasks"} on the todo list.`}</h3>
            <h3>{`${props.todosNotCompletedCount > 0 ? `Still a lot to do. Keep working on the ${props.todosNotCompletedCount} ${props.todosNotCompletedCount === 1 ? "task" : "tasks"} remaining!` : props.todosCount > 0 ? "All of them completed." : ""}`}</h3>
        </div>
	);
}

export default TodoTop;