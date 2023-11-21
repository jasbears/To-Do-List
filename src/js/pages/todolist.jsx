import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../styles/index.css";
import injectContext from "../../store/appContext";

const Todolist = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container" id="todolist-form">
      <div className="form-todo">
        <h2>Todo List</h2>
        {
          <button
            className="d-grid gap-2 col-6 mx-auto"
            id="xallbtn"
            onClick={() => actions.deleteAll()}
          >
            Delete All
          </button>
        }
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="input-group form-control"
              placeholder="What To Do?"
              onKeyPress={(e) => actions.addList(e)}
            />
          </form>
        </div>
        {store.todoList.map((item, index) => {
          return (
            <ul>
              <li key={`"li${index}"`} className="list-group-item">
                {item.label}
                <i
                  class="bi bi-x-square"
                  id="squarex"
                  onClick={() => actions.deleteTask(index)}
                ></i>
              </li>
            </ul>
          );
        })}
        <div>
          <li className="items-listing">
            {store.todoList.length} item
            {store.todoList.length === 0 ? "" : "s"} left
          </li>
        </div>
      </div>
    </div>
  );
};

export default injectContext(Todolist);
