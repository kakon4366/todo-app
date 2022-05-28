import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/todo")
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, []);

	return (
		<div>
			<h1>todo list {todos.length}</h1>
			<div>
				{todos.map((todo) => (
					<TodoItem key={todo._id} todo={todo}></TodoItem>
				))}
			</div>
		</div>
	);
};

export default TodoList;
