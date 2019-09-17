import { v4 } from "uuid";

const initialState = {
  todos: {
    [v4()]: {
      task: "Clean your room!",
      completed: false
    }
  }
};

function task(state = initialState, action) {
  let newState;
  let todo;
  let boolean;
  switch (action.type) {
    case "ADD_TODO":
      newState = Object.assign({}, state);
      todo = { task: action.payload, completed: false };
      newState.todos[v4()] = todo;
      return newState;
    case "REMOVE_TODO":
      newState = Object.assign({}, state);
      delete newState.todos[action.payload];
      return newState;
    case "TOGGLE_TODO":
      newState = Object.assign({}, state);
      boolean = newState.todos[action.payload].completed;
      newState.todos[action.payload].completed = !boolean;
      return newState;
    default:
      return state;
  }
}

export default task;
