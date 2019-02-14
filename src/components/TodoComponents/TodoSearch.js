import React from 'react';

const TodoSearch = props => {
	return (
        props.findTodos().length > 0 ?
        <div className="searchBox">
            <input 
                type="text"
                name="search"
                placeholder="find your todos..."
                value={props.search}
                onChange={props.onSearchChange}
            />
            {
                props.search !== "" ?
                <h3>Found {props.findTodos(props.search).length} {props.findTodos(props.search).length === 1 ? "todo" : "todos"}.</h3>
                : ""
            }
        </div>
        : ""
	);
}

export default TodoSearch;
