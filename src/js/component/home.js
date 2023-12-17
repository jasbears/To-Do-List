import React from "react";
import ToDoList from "../pages/todolist.js";
import "../../styles/index.css";

export function Home() {
  return (
    <div className="container">
      <ToDoList />
    </div>
  );
}
