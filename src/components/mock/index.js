"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import T01LazyLoading from "./T01LazyLoading";
import T00CreatePortal from "./T00CreatePortal";
var Mock = function () {
    var _a = useState(0), showMock = _a[0], setShowMock = _a[1];
    var _b = useState(undefined), activeLink = _b[0], setActiveLink = _b[1];
    var allMocks = {
        0: _jsx(T00CreatePortal, {}),
        1: _jsx(T01LazyLoading, {}),
    };
    var links = [
        { title: "Mock00APIIntegration", value: 0 },
        { title: "MockT01LazyLoading", value: 1 },
    ];
    return (_jsxs(Fragment, { children: [_jsx("div", { children: _jsx("h1", { children: "Mock Interviews" }) }), _jsx("div", { className: "pageLinks", children: links.map(function (link) { return (_jsx("a", { 
                    // {...(activeLink == link.value && { className: "active" })}
                    className: activeLink == link.value ? "active" : undefined, onClick: function () {
                        setShowMock(link.value);
                        setActiveLink(link.value);
                    }, children: link.title }, link.value)); }) }), allMocks[showMock]] }));
};
export default Mock;
