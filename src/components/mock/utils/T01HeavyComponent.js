import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
var T01HeavyComponent = function () {
    var heavyArray = Array.from({ length: 1000 }, function (_, i) { return i + 1; });
    return (_jsxs(Fragment, { children: [_jsx("h3", { children: "T01HeavyComponent" }), _jsx("ul", { children: heavyArray.slice(0, 10).map(function (record) { return (_jsx("li", { children: record }, record)); }) }), _jsxs("p", { children: ["... and ", heavyArray.length - 10, " more Items "] })] }));
};
export default T01HeavyComponent;
