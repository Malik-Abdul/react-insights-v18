import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
var Counter = function () {
    var count = useSelector(function (state) { return state.counter.value; });
    var dispatch = useDispatch();
    var _a = useState(2), incrementedValue = _a[0], setIncrementedValue = _a[1];
    return (_jsxs(Fragment, { children: [_jsx("div", { children: "Counter" }), _jsxs("div", { children: [_jsx("button", { "aria-label": "Increment value", onClick: function () { return dispatch(increment()); }, children: "Increment" }), _jsx("span", { children: count }), _jsx("button", { "aria-label": "Decrement value", onClick: function () { return dispatch(decrement()); }, children: "Decrement" }), _jsx("button", { "aria-label": "increment By Amount", onClick: function () { return dispatch(incrementByAmount(incrementedValue)); }, children: "incrementByAmount" }), _jsx("input", { type: "text", onChange: function (e) { return setIncrementedValue(Number(e.target.value)); }, value: incrementedValue })] })] }));
};
export default Counter;
