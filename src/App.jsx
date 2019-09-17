import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { addTodo, removeTodo, toggleTodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state);
  let todosList = [];
  console.log(currentState.taskData.todos);

  for (let x in currentState.taskData.todos) {
    console.log("this is x in the for x in todos loop:", x);
    console.log(currentState.taskData.todos[x]);
    todosList.push(
      <div key={x}>
        <h1> {currentState.taskData.todos[x].task}</h1>
        <h3>
          Completed? {currentState.taskData.todos[x].completed.toString()}
        </h3>
        <button onClick={() => dispatch(toggleTodo(x))}>toggleTodo</button>
        <button onClick={() => dispatch(removeTodo(x))}>Delete</button>
      </div>
    );
    console.log("todosList", todosList);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <h1>THIS WORKS</h1>
        <form
          onSubmit={() => {
            event.preventDefault();
            dispatch(addTodo(event.target.task.value));
            event.target.task.value = "";
          }}
        >
          <label>Task: </label>
          <input name="task" />
          <button type="submit"> Submit!!! </button>
        </form>
        {todosList}
      </div>
    </BrowserRouter>
  );
};

export default App;
