import React from 'react';

const TodoTop = props => {
	return (
        <h1>Todo List
            <span>Get all your things done. One thing at a time.</span>
            <span>{`You have ${props.todosCount} ${props.todosCount === 1 ? "task" : "tasks"} on the todo list.`}</span>
            <span>{`${props.todosNotCompletedCount > 0 ? `Still a lot to do. Keep working on the ${props.todosNotCompletedCount} ${props.todosNotCompletedCount === 1 ? "task" : "tasks"} remaining!` : props.todosCount > 0 ? "All of them completed." : ""}`}</span>
        </h1>
	);
}

export default TodoTop;