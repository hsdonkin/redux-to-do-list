export const addTodo = task => ({
  type: "ADD_TODO",
  payload: task
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: id
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: id
});
