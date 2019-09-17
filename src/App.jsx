import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { addTodo, removeTodo, toggleTodo } from "./actions";
import { connect } from "react-redux";

const App = props => {
  let todosList = [];
  console.log(props.currentState.taskData.todos);

  for (let x in props.currentState.taskData.todos) {
    console.log("this is x in the for x in todos loop:", x);
    console.log(props.currentState.taskData.todos[x]);
    todosList.push(
      <div key={x}>
        <h1> {props.currentState.taskData.todos[x].task}</h1>
        <h3>
          Completed? {props.currentState.taskData.todos[x].completed.toString()}
        </h3>
        <button onClick={() => props.toggleTodo(x)}>toggleTodo</button>
        <button onClick={() => props.removeTodo(x)}>Delete</button>
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
            props.addTodo(event.target.task.value);
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

const mapStateToProps = state => {
  return { currentState: state };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo }
)(App);
