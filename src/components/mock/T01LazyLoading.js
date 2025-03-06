import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Fragment, Suspense } from "react";
var HeavyComponent = React.lazy(function () { return import("./utils/T01HeavyComponent"); });
var T01LazyLoading = function () {
    return (_jsxs(Fragment, { children: [_jsx("h2", { children: "LazyLoading" }), _jsx(Suspense, { fallback: _jsx("div", { children: "...Loading" }), children: _jsx(HeavyComponent, {}) })] }));
};
export default T01LazyLoading;
