import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
var Footer = function () {
    // const context = useContext(ThemeContext);
    // if (!context) {
    //   throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
    // }
    var theme = "dark";
    return (_jsx(Fragment, { children: _jsx("footer", { className: "footer ".concat(theme), children: "Footer" }) }));
};
export default Footer;
