"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Content from "./Content";
var MainLayout = function () {
    return (_jsxs(Fragment, { children: [_jsx(Header, {}), _jsxs("div", { className: "main", children: [_jsx(SideBar, {}), _jsx(Content, {})] }), _jsx(Footer, {})] }));
};
export default MainLayout;
