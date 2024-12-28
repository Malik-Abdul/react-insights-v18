"use client";
import { FC, Fragment } from "react";
import T01LazyLoading from "./mock/T01LazyLoading";

const Main: FC = () => {
  return (
    <Fragment>
      <h1>Main Component</h1>
      <T01LazyLoading />
    </Fragment>
  );
};

export default Main;
