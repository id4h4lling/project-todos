import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";

import Wrapper from "components/Wrapper";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};
