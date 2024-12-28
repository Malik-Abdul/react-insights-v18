"use client";
import { Fragment, useContext, useState } from "react";

// import Link from "next/link";

// import { ThemeContext } from "@/context/ThemeContext";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const [theme, setTheme] = useState("dark");

  // Toggle the state of a submenu (open/close)

  // const context = useContext(ThemeContext);
  // if (!context) {
  //   throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  // }
  // const { theme } = context;

  const nav = [
    { id: 1, title: "React Redux", link: "/react-redux" },
    { id: 2, title: "React Query", link: "/react-query" },
    { id: 3, title: "React Context API", link: "/react-context-api" },
  ];
  // data/menu.js

  return (
    <Fragment>
      <div className={`sideBar ${theme}`}>
        <nav className="side-menu">
          {nav.map((item) => (
            <a
              key={item.id}
              className={
                activeLink == item.id
                  ? `side-eachNave ${theme} active`
                  : `side-eachNave ${theme}`
              }
              href={item.link}
              onClick={() => {
                setActiveLink(item.id);
              }}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
