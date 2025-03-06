var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// import Link from "next/link";
// import { ThemeContext } from "@/context/ThemeContext";
var Header = function () {
    var _a = useState(undefined), activeLink = _a[0], setActiveLink = _a[1];
    //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTheme(event.target.value);
    //   };
    var navigate = useNavigate();
    var isAuthenticated = !!localStorage.getItem("access_token"); // Check if user is logged in
    var _b = useAuth(), user = _b.user, handleLogout = _b.handleLogout;
    var nav = __spreadArray([], (user
        ? [
            { id: 2, title: "Home", link: "/" },
            { id: 3, title: "About", link: "/about" },
            { id: 4, title: "React Redux", link: "/ReactRedux" },
            { id: 6, title: "Logout", link: "/logout" },
        ]
        : [{ id: 1, title: "Signin", link: "/Signin" }]), true);
    //   const context = useContext(ThemeContext);
    //   if (!context) {
    //     throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
    //   }
    //   const { theme, setTheme } = context;
    var _c = useState("dark"), theme = _c[0], setTheme = _c[1];
    // console.log(theme);
    // const handleLogout = () => {
    //   logout();
    //   navigate("/Signin"); // Redirect to login
    // };
    // const handleLogout = async () => {
    //   try {
    //     await axios.post("http://127.0.0.1:9000/api/logout/", {}, { withCredentials: true });
    //     navigate("/Signin");
    //   } catch (error) {
    //     console.error("Logout failed", error);
    //   }
    // };
    return (_jsx(Fragment, { children: _jsx("div", { className: "page-header", children: _jsx("nav", { className: "top-menu ".concat(theme), children: _jsx("div", { className: "nav-links", children: nav.map(function (item) {
                        return item.title === "Logout" ? (_jsx("button", { onClick: handleLogout, children: item.title }, item.id)) : (_jsx(Link, { className: activeLink === item.id
                                ? "top-eachNave ".concat(theme, " active")
                                : "top-eachNave ".concat(theme), to: item.link, onClick: function () {
                                setActiveLink(item.id);
                            }, children: item.title }, item.id));
                    }) }) }) }) }));
};
export default Header;
