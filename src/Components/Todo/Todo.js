import React from "react";
import TodoList from "../TotoList/TodoList";
import "./Todo.css";

const Todo = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const description = e.target.description.value;
		console.log(title, description);
		const todo = { title, description };

		fetch("http://localhost:5000/todo", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(todo),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div className="container">
			<div className="todo-container">
				<div className="todo-form-area">
					<h2>Todo App</h2>
					<div>
						<form onSubmit={handleSubmit} className="todo-form">
							<input type="text" name="title" placeholder="Title" />
							<input
								type="text"
								name="description"
								placeholder="Description"
							/>
							<input type="submit" value="Add Task" />
						</form>
					</div>
				</div>
				<TodoList></TodoList>
			</div>
		</div>
	);
};

export default Todo;
