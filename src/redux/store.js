import { createStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const store = createStore(todoReducer);

export default store;
