import { combineReducers } from "redux";
import task from "./task";
import isLoggedIn from "./authentication";

export default combineReducers({
  taskData: task,
  isLoggedIn: isLoggedIn
});
