import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
// import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/Header";
import ReactRedux from "./pages/ReactRedux";
import Signin from "./pages/Signin";
import { AuthProvider } from "../src/context/AuthContext";
var App = function () {
    return (_jsx(Fragment, { children: _jsx(Provider, { store: store, children: _jsx(AuthProvider, { children: _jsxs(Router, { children: [_jsx(Header, {}), " ", _jsxs(Routes, { children: [_jsx(Route, { path: "/Signin", element: _jsx(Signin, {}) }), _jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "ReactRedux", element: _jsx(ReactRedux, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] })] }) }) }) }));
};
export default App;
