import React, { useEffect, useState } from "react";

//create your first component
const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const getTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jasbears", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log("Error!", error));
  };

  const newTodos = () => {
    let todos = [];
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jasbears", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getTodos();
      })
      .catch((error) => console.log("Error", error));
  };

  const updateTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jasbears", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error!", error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    updateTodos();
  }, []);

  const ErrorChange = (e) => {
    if (error) {
      setError(false);
    }
    setTodos(e.target.value);
  };

  const deleteTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jasbears", {
      method: "DELETE",
      headers: { "Content-Types": "application/json" },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        newTodos();
      })
      .catch((error) => console.log("Error", error));
  };

  const SubmitTodo = (e) => {
    e.preventDefault();

    if (todo === "") {
      setError("A task name is needed!");
    } else {
      setTodos([...todos, { label: todos, done: false }]);
    }
  };

  return (
    <>
      <h2>Todo List</h2>
      <div className="container">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setTodos(todos.concat(inputValue));
              setInputValue("");
            }
          }}
          placeholder="What To Do?"
        ></input>
        {todos.map((item, index) => (
          <li>
            {item}{" "}
            <i
              class="bi bi-x-square"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
        <div className="itemCounter">{todos.length} task left to do...</div>
      </div>
    </>
  );
};
export default ToDoList;
