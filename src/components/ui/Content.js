import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
import { Fragment } from "react/jsx-runtime";
import Main from "../Main";
var Content = function () {
    var _a = useState("dark"), theme = _a[0], setTheme = _a[1];
    // const context = useContext(ThemeContext);
    // if (!context) {
    //   throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
    // }
    // const { theme } = context;
    return (_jsx(Fragment, { children: _jsx("div", { className: "content ".concat(theme), children: _jsx(Main, {}) }) }));
};
export default Content;
