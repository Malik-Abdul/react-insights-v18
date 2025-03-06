var _a;
import { createSlice } from "@reduxjs/toolkit";
export var counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: function (state) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value += 1;
        },
        decrement: function (state) {
            state.value -= 1;
        },
        incrementByAmount: function (state, action) {
            state.value += action.payload;
        },
    },
});
export var increment = (_a = counterSlice.actions, _a.increment), decrement = _a.decrement, incrementByAmount = _a.incrementByAmount;
export default counterSlice.reducer;
