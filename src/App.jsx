import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { addTodo, removeTodo, toggleTodo } from "./actions";

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo("Walk the dog"));
store.dispatch(addTodo("Make an interface"));

const App = () => (
  <BrowserRouter>
    <main className="container">
      <h1>THIS WORKS</h1>
    </main>
  </BrowserRouter>
);

export default App;
