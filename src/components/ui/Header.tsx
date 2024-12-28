import React, { Fragment, useContext, useState } from "react";

// import Link from "next/link";

// import { ThemeContext } from "@/context/ThemeContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTheme(event.target.value);
  //   };

  const nav = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "React Query", link: "/react-query" },
    { id: 3, title: "React Redux", link: "/react-redux" },
    { id: 4, title: "React Context API", link: "/react-context-api" },
    { id: 5, title: "Mock Interviews", link: "/mock-interviews" },
  ];

  //   const context = useContext(ThemeContext);
  //   if (!context) {
  //     throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  //   }
  //   const { theme, setTheme } = context;
  const [theme, setTheme] = useState("dark");

  // console.log(theme);

  return (
    <Fragment>
      <div className="page-header">
        <nav className={`top-menu ${theme}`}>
          <div className="nav-links">
            {nav.map((item) => (
              <a
                key={item.id}
                className={
                  activeLink == item.id
                    ? `top-eachNave ${theme} active`
                    : `top-eachNave ${theme}`
                }
                href={item.link}
                onClick={() => {
                  setActiveLink(item.id);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="theme-switcher">
            <label>
              <input
                type="radio"
                name="options"
                value="dark"
                checked={theme === "dark"}
                // onChange={handleChange}
              />
              Dark
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="light"
                checked={theme === "light"}
                // onChange={handleChange}
              />
              Light
            </label>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
