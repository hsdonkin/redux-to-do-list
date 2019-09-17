import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { addTodo, removeTodo, toggleTodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state);
  let todosList = [];
  console.log(currentState.taskData.todos);
  for (var x in currentState.taskData.todos) {
    console.log("this is x in the for x in todos loop:", x);
    console.log(currentState.taskData.todos[x]);
    todosList.push(
      <div key={x} id={x}>
        <h1 id={x}>{currentState.taskData.todos[x].task}</h1>
        <button
          onClick={() => {
            dispatch(removeTodo(x));
          }}
        >
          Delete {x}
        </button>
      </div>
    );
    console.log("todosList", todosList);
  }

  return (
    <BrowserRouter>
      <main className="container">
        <h1>THIS WORKS</h1>
        {todosList}
      </main>
    </BrowserRouter>
  );
};

export default App;
