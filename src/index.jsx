/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// react dependencies
import React from "react";
import ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { addTodo, removeTodo, toggleTodo } from "./actions";

import App from "./App";

import "./style.scss";

const root = document.getElementById("root");
const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo("Walk the dog"));
store.dispatch(addTodo("Make an interface "));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
