import { combineReducers, createStore } from "@reduxjs/toolkit";
import { todoReducer } from "./module";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
})

export const store = createStore(rootReducer);

export type Rootstate = ReturnType<typeof rootReducer>