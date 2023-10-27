import React, { useState } from "react";

//create your first component
const ToDoList = () => {

	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([]);

	return (
		<>
			<h2>Todo List</h2>
		<div className="container">
		<input type="text" onChange={(e) => setInputValue(e.target.value)}
			value={inputValue}
			onKeyPress={(e) => {
				if (e.key === "Enter"){
					setTodos(todos.concat(inputValue));
					setInputValue("");
				}
			}
			}
		 placeholder="What To Do?"></input>
		 {todos.map((item, index) => (
			<li>
				{item} <i class="bi bi-x-square" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
			</li>
		 ))}
		 <div className="itemCounter">{todos.length} task left to do...</div>
		</div>
		</>
	);
};
export default ToDoList;
