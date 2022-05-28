import React from "react";

const TodoItem = ({ todo }) => {
	const { title, description } = todo;
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default TodoItem;
