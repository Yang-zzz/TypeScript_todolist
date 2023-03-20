import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import {counterReducer} from "./module";

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
