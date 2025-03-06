"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useState } from "react";
// import Link from "next/link";
// import { ThemeContext } from "@/context/ThemeContext";
var SideBar = function () {
    var _a = useState(undefined), activeLink = _a[0], setActiveLink = _a[1];
    var _b = useState("dark"), theme = _b[0], setTheme = _b[1];
    // Toggle the state of a submenu (open/close)
    // const context = useContext(ThemeContext);
    // if (!context) {
    //   throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
    // }
    // const { theme } = context;
    var nav = [
        { id: 1, title: "React Redux", link: "/react-redux" },
        { id: 2, title: "React Query", link: "/react-query" },
        { id: 3, title: "React Context API", link: "/react-context-api" },
    ];
    // data/menu.js
    return (_jsx(Fragment, { children: _jsx("div", { className: "sideBar ".concat(theme), children: _jsx("nav", { className: "side-menu", children: nav.map(function (item) { return (_jsx("a", { className: activeLink == item.id
                        ? "side-eachNave ".concat(theme, " active")
                        : "side-eachNave ".concat(theme), href: item.link, onClick: function () {
                        setActiveLink(item.id);
                    }, children: item.title }, item.id)); }) }) }) }));
};
export default SideBar;
