import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
export var store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
