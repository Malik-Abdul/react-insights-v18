import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../api/auth";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";


// import Link from "next/link";

// import { ThemeContext } from "@/context/ThemeContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTheme(event.target.value);
  //   };
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("access_token"); // Check if user is logged in

  const { user, handleLogout } = useAuth();

  const nav = [
    ...(user
      ? [
          { id: 2, title: "Home", link: "/" },
          { id: 3, title: "About", link: "/about" },
          { id: 4, title: "React Redux", link: "/ReactRedux" },
          { id: 6, title: "Logout", link: "/logout" },
        ]
      : [{ id: 1, title: "Signin", link: "/Signin" }]),
  ];

  //   const context = useContext(ThemeContext);
  //   if (!context) {
  //     throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  //   }
  //   const { theme, setTheme } = context;
  const [theme, setTheme] = useState("dark");

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

  return (
    <Fragment>
      <div className="page-header">
        <nav className={`top-menu ${theme}`}>
          <div className="nav-links">
            {nav.map((item) =>
              item.title === "Logout" ? (
                <button key={item.id} onClick={handleLogout}>
                  {item.title}
                </button>
              ) : (
                <Link
                  key={item.id}
                  className={
                    activeLink === item.id
                      ? `top-eachNave ${theme} active`
                      : `top-eachNave ${theme}`
                  }
                  to={item.link}
                  onClick={() => {
                    setActiveLink(item.id);
                  }}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
          {/* <div className="theme-switcher">
            <label>
              <input
                type="radio"
                name="options"
                value="dark"
                checked={theme === "dark"}
                onChange={handleChange}
              />
              Dark
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="light"
                checked={theme === "light"}
                onChange={handleChange}
              />
              Light
            </label>
          </div> */}
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
