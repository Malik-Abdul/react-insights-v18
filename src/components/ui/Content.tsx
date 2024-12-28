import { FC, useContext, useState } from "react";

// import { ThemeContext } from "@/context/ThemeContext";

import { Fragment } from "react/jsx-runtime";
import Main from "../Main";

const Content: FC = () => {
  const [theme, setTheme] = useState("dark");
  // const context = useContext(ThemeContext);
  // if (!context) {
  //   throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  // }
  // const { theme } = context;
  return (
    <Fragment>
      <div className={`content ${theme}`}>
        <Main />
      </div>
    </Fragment>
  );
};

export default Content;
