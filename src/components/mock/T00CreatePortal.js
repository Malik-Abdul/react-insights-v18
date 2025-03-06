import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { createPortal } from "react-dom";
var T00CreatePortal = function () {
    return (_jsxs(Fragment, { children: [_jsx("div", { children: "createPortal" }), _jsxs("div", { style: { border: "2px solid black" }, children: [_jsx("div", { children: "createPortal lets you render some children into a different part of the DOM." }), _jsx("p", { children: "This child is placed in the parent div." }), createPortal(_jsx("p", { children: "This child is placed in the document body." }), document.body)] })] }));
};
export default T00CreatePortal;
